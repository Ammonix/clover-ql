"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLEnumType({
    name: "FileExtension",
    values: {
        jpg: { value: ".jpg" },
        png: { value: ".png" },
        gif: { value: ".gif" },
        pdf: { value: ".pdf" },
        swf: { value: ".swf" },
        webm: { value: ".webm" }
    }
});
//# sourceMappingURL=fileExtension.type.js.map