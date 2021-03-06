import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import schema from "./schema";
import context from "./context";
class App {
  public express: express.Express;
  constructor() {
    this.express = express();
    this.configuration();
  }
  private configuration(): void {
    this.express.get("/", (req, res) => res.redirect("/graphql"));
    this.express.use(
      "/graphql",
      graphqlHTTP({
        context,
        schema,
        graphiql: true
      })
    );
  }
}

export default new App().express;
