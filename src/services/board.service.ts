import fourChanClient from "../clients/fourChan.client";

class BoardService {
  public getBoards = (): Promise<any[]> =>
    fourChanClient.getJSONFromRelativeURL<any>("/boards.json").then(json => json.boards);

  public getBoard = (id: string): Promise<any> =>
    this.getBoards().then(boards => boards.find(board => board.board === id));
}

export default new BoardService();
