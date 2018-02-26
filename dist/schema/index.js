"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const query_type_1 = require("./types/query.type");
exports.default = new graphql_1.GraphQLSchema({
    query: query_type_1.default
});
//# sourceMappingURL=index.js.map