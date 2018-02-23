"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import schema from "./schema";
class App {
    constructor() {
        this.express = express();
        this.configuration();
    }
    configuration() {
        this.express.get("/", (req, res) => res.send("Hello World!"));
        // this.express.use(
        //   "/graphql",
        //   graphqlHTTP({
        //     schema: schema,
        //     graphiql: true
        //   })
        // );
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map