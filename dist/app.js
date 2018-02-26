"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema_1 = require("./schema");
const context_1 = require("./context");
class App {
    constructor() {
        this.express = express();
        this.configuration();
    }
    configuration() {
        this.express.get("/", (req, res) => res.redirect("/graphql"));
        this.express.use("/graphql", graphqlHTTP({
            context: context_1.default,
            schema: schema_1.default,
            graphiql: true
        }));
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map