"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLObjectType({
    name: "Cooldowns",
    description: "Default posting cooldowns in ms.",
    fields: () => ({
        threads: {
            type: graphql_1.GraphQLInt,
            resolve: cooldowns => cooldowns.threads
        },
        replies: {
            type: graphql_1.GraphQLInt,
            resolve: cooldowns => cooldowns.replies
        },
        images: {
            type: graphql_1.GraphQLInt,
            resolve: cooldowns => cooldowns.images
        }
    })
});
//# sourceMappingURL=cooldowns.type.js.map