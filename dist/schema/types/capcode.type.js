"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLEnumType({
    name: "Capcode",
    values: {
        none: { value: "none" },
        mod: { value: "mod" },
        admin: { value: "admin" },
        admin_highlight: { value: "admin_highlight" },
        manager: { value: "manager" },
        developer: { value: "developer" },
        founder: { value: "founder" }
    }
});
//# sourceMappingURL=capcode.type.js.map