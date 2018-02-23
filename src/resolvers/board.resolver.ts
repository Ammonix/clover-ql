import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import fourChanClient from "../clients/fourChan.client";

class BoardResolver {
  public boards(): Observable<any[]> {
    return fourChanClient
      .get<any>("/boards.json")
      .pipe(map(result => result.boards));
  }
  public board(id: string): Observable<any> {
    return this.boards().pipe(
      map(boards => boards.find(board => board.board === id))
    );
  }
}

export default new BoardResolver();
