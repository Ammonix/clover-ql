"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const post_type_1 = require("./post.type");
exports.default = new graphql_1.GraphQLObjectType({
    name: "Thread",
    description: "Default posting cooldowns in ms.",
    fields: () => ({
        threadNumber: {
            type: graphql_1.GraphQLInt,
            resolve: thread => thread.no
        },
        lastModified: {
            type: graphql_1.GraphQLInt,
            description: "UNIX timestamp",
            resolve: thread => thread.last_modified
        },
        allPosts: {
            type: new graphql_1.GraphQLList(post_type_1.default),
            resolve: (root, args, { loaders: { postLoader } }) => postLoader.loadMany(root.boardId, root.no)
        },
        post: {
            type: post_type_1.default,
            args: {
                id: { type: graphql_1.GraphQLInt }
            },
            resolve: (root, args, { loaders: { postLoader } }) => postLoader.load(root.boardId, root.no, args.id)
        }
    })
});
//# sourceMappingURL=thread.type.js.map