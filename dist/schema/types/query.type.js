"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const board_type_1 = require("./board.type");
exports.default = new graphql_1.GraphQLObjectType({
    name: "Query",
    description: "The root of all queries",
    fields: () => ({
        allBoards: {
            type: new graphql_1.GraphQLList(board_type_1.default),
            description: "All boards on 4Chan.",
            resolve: (root, args, { loaders: { boardLoader } }) => boardLoader.loadMany()
        },
        board: {
            type: board_type_1.default,
            args: {
                id: { type: graphql_1.GraphQLID }
            },
            resolve: (root, args, { loaders: { boardLoader } }) => boardLoader.load(args.id)
        }
    })
});
//# sourceMappingURL=query.type.js.map