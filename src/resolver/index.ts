import * as rm from "typed-rest-client/RestClient";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import "rxjs/add/observable/from";
const client = new rm.RestClient("4chan-rest-api", "https://a.4cdn.org");
const get = <T>(resource: string): Observable<T> =>
  Observable.from(client.get<T>(resource)).pipe(
    map(response => response.result)
  );

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
