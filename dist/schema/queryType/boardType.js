"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.BoardType = new graphql_1.GraphQLObjectType({
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
        }
    })
});
//# sourceMappingURL=boardType.js.map