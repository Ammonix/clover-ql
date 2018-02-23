import fourChanClient from "../clients/fourChan.client";

class BoardService {
  public getBoards = (): Promise<any[]> =>
    fourChanClient
      .getJSONFromRelativeURL<any>("/boards.json")
      .then(json => json.boards);
}

export default new BoardService();
