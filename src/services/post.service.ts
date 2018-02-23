import fourChanClient from "../clients/fourChan.client";

class BoardService {
  public getPosts = (board: string): Promise<any[]> =>
    fourChanClient
      .getJSONFromRelativeURL<any>(`/${board}/threads.json`)
      .then(this.flatten);

  public getPost = (board: string, id: string): Promise<any> =>
    this.getPosts(board).then(posts => posts.find(post => post.board === id));
  private flatten(posts: any[]): any[] {
    let arr: any[] = [];
    for (const post of posts) {
      arr = arr.concat(post.threads);
    }
    return arr;
  }
}

export default new BoardService();
