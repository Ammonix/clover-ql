import * as rm from "typed-rest-client/RestClient";
import { fromPromise } from "rxjs/Observable/fromPromise";
import { Observable } from "rxjs/Observable";
import { map, tap } from "rxjs/operators";
const client = new rm.RestClient("4chan-rest-api", "https://a.4cdn.org");
const get = <T>(resource: string): Observable<T> =>
  fromPromise(client.get<T>(resource)).pipe(
    tap(t => console.log(t)),
    map(response => response.result)
  );

class Resolver {
  public boards(): any {
    return get<any>("/boards.json")
      .pipe(map(result => result.boards));
  }
  public async board(id: string) {
    // const boards = (await this.boards()) as any[];
    // console.log(boards);
    // return boards.filter(board => board.board == id);
  }
}

export default new Resolver();
