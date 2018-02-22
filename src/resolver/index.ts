import * as rm from "typed-rest-client/RestClient";
const rest = new rm.RestClient("4chan-rest-api", "https://a.4cdn.org");

class Resolver {
  public boards(): any {
    return rest.get<any>("/boards.json").then(boards => boards.result.boards);
  }
  public board(id: string) {}
}

export default new Resolver();
