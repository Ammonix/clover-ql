import * as express from "express";
import * as graphqlHTTP from "express-graphql";
// import schema from "./schema";
class App {
  public express: express.Express;
  constructor() {
    this.express = express();
    this.configuration();
  }
  private configuration(): void {
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

export default new App().express;
