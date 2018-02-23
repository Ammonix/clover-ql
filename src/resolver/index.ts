import * as rm from "typed-rest-client/RestClient";
import { fromPromise } from "rxjs/Observable/fromPromise";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
const client = new rm.RestClient("4chan-rest-api", "https://a.4cdn.org");
const get = <T>(resource: string): Observable<T> =>
  fromPromise(client.get<T>(resource)).pipe(map(response => response.result));

class Resolver {
  public boards(): Observable<any[]> {
    return get<any>("/boards.json").pipe(map(result => result.boards));
  }
  public board(id: string): Observable<any> {
    return this.boards().pipe(
      map(boards => boards.find(board => board.board === id))
    );
  }
}

export default new Resolver();
