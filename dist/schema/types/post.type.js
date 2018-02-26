"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const role_type_1 = require("./role.type");
const capcode_type_1 = require("./capcode.type");
const fileExtension_type_1 = require("./fileExtension.type");
exports.default = new graphql_1.GraphQLObjectType({
    name: "Post",
    description: "A Posts",
    fields: () => ({
        postNumber: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.no
        },
        replyTo: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.resto
        },
        isSticky: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.sticky
        },
        isClosed: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.close
        },
        isArchived: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.archived
        },
        archivedOn: {
            type: graphql_1.GraphQLInt,
            description: "UNIX timestamp",
            resolve: post => post.archived_on
        },
        dateAndTime: {
            type: graphql_1.GraphQLString,
            description: "MM/DD/YY(Day)HH:MM (:SS on some boards), EST/EDT timezone",
            resolve: post => post.now
        },
        time: {
            type: graphql_1.GraphQLInt,
            description: "UNIX timestamp",
            resolve: post => post.time
        },
        name: {
            type: graphql_1.GraphQLString,
            resolve: post => post.name
        },
        tripcode: {
            type: graphql_1.GraphQLString,
            resolve: post => post.tripcode
        },
        role: {
            type: role_type_1.default,
            resolve: post => post.id
        },
        capcode: {
            type: capcode_type_1.default,
            resolve: post => post.capcode
        },
        countryCode: {
            type: graphql_1.GraphQLString,
            description: "text (2 characters, ISO 3166-1 alpha-2), XX (unknown)",
            resolve: post => post.country
        },
        countryName: {
            type: graphql_1.GraphQLString,
            resolve: post => post.country_name
        },
        subject: {
            type: graphql_1.GraphQLString,
            resolve: post => post.sub
        },
        comment: {
            type: graphql_1.GraphQLString,
            resolve: post => post.com
        },
        renamedFilename: {
            type: graphql_1.GraphQLInt,
            description: "UNIX timestamp + milliseconds",
            resolve: post => post.tim
        },
        filename: {
            type: graphql_1.GraphQLString,
            resolve: post => post.filename
        },
        fileExtension: {
            type: fileExtension_type_1.default,
            resolve: post => post.ext
        },
        fileSize: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.fsize
        },
        fileMD5: {
            type: graphql_1.GraphQLString,
            description: "24 character, packed base64 MD5 hash",
            resolve: post => post.md5
        },
        imageWidth: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.w
        },
        imageHeight: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.h
        },
        thumbnailWidth: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.tn_w
        },
        thumbnaiHeight: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.tn_h
        },
        isFileDeleted: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.filedeleted
        },
        isFileSpoiler: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.spoiler
        },
        customSpoilers: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.custom_spoiler
        },
        omittedPosts: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.omitted_posts
        },
        omittedImages: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.omitted_images
        },
        repliesTotal: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.replies
        },
        imagesTotal: {
            type: graphql_1.GraphQLInt,
            resolve: post => post.images
        },
        isBumplimitMet: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.bumplimit
        },
        isImageLimit: {
            type: graphql_1.GraphQLBoolean,
            resolve: post => !!post.imagelimit
        },
        lastModified: {
            type: graphql_1.GraphQLInt,
            description: "UNIX timestamp",
            resolve: post => post.last_modified
        },
        tag: {
            type: graphql_1.GraphQLString,
            resolve: post => post.tag
        },
        semanticUrl: {
            type: graphql_1.GraphQLString,
            resolve: post => post.semantic_url
        },
        absoluteFilePath: {
            type: graphql_1.GraphQLString,
            resolve: (root, args, { loaders: { postLoader } }) => `https://i.4cdn.org/${root.boardId}/${root.tim}${root.ext}`
        },
        since4pass: {
            type: graphql_1.GraphQLInt,
            description: "Year 4chan Pass bought, 4 digit year (YYYY)",
            resolve: post => post.since4pass
        }
    })
});
//# sourceMappingURL=post.type.js.map