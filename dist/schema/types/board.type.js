"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const cooldowns_type_1 = require("./cooldowns.type");
const thread_type_1 = require("./thread.type");
exports.default = new graphql_1.GraphQLObjectType({
    name: "Board",
    description: "A board",
    fields: () => ({
        id: {
            type: graphql_1.GraphQLString,
            resolve: board => board.board
        },
        name: {
            type: graphql_1.GraphQLString,
            resolve: board => board.title
        },
        description: {
            type: graphql_1.GraphQLString,
            resolve: board => board.meta_description
        },
        isNsfw: {
            type: graphql_1.GraphQLBoolean,
            resolve: board => !board.ws_board
        },
        maxPageCount: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.pages
        },
        maxThreadsPerPage: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.per_page
        },
        maxImgFilesize: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.max_filesize
        },
        maxWebmFilesize: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.max_webm_filesize
        },
        maxCommentChars: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.max_comment_chars
        },
        maxWebmDuration: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.max_webm_duration
        },
        bumpLimit: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.bump_limit
        },
        imageLimit: {
            type: graphql_1.GraphQLInt,
            resolve: board => board.image_limit
        },
        cooldowns: {
            type: cooldowns_type_1.default,
            resolve: board => board.cooldowns
        },
        isArchived: {
            type: graphql_1.GraphQLBoolean,
            resolve: board => board.is_archived
        },
        allThreads: {
            type: new graphql_1.GraphQLList(thread_type_1.default),
            resolve: (root, args, { loaders: { threadLoader } }) => threadLoader.loadMany(root.board)
        },
        thread: {
            type: thread_type_1.default,
            args: {
                id: { type: graphql_1.GraphQLInt }
            },
            resolve: (root, args, { loaders: { threadLoader } }) => threadLoader.load(root.board, args.id)
        }
    })
});
//# sourceMappingURL=board.type.js.map