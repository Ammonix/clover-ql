"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLEnumType({
    name: "Role",
    values: {
        Mod: { value: "Mod" },
        Admin: { value: "Admin" },
        Manager: { value: "Manager" },
        Developer: { value: "Developer" },
        Founder: { value: "Founder" }
    }
});
//# sourceMappingURL=role.type.js.map