"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const queryType_1 = require("./queryType");
exports.default = new graphql_1.GraphQLSchema({
    query: queryType_1.QueryType
});
//# sourceMappingURL=index.js.map