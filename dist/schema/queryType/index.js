"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardType_1 = require("./boardType");
const graphql_1 = require("graphql");
const resolver_1 = require("../../resolver");
require("rxjs/add/observable/fromPromise");
exports.QueryType = new graphql_1.GraphQLObjectType({
    name: "Query",
    description: "The root of all queries",
    fields: () => ({
        allBoards: {
            type: new graphql_1.GraphQLList(boardType_1.BoardType),
            resolve: () => resolver_1.default.boards().toPromise()
        },
        board: {
            type: boardType_1.BoardType,
            args: {
                id: { type: graphql_1.GraphQLID }
            },
            resolve: (root, args) => resolver_1.default.board(args.id).toPromise()
        }
    })
});
//# sourceMappingURL=index.js.map