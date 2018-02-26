import fourChanClient from "../clients/fourChan.client";

class BoardService {
  public getPosts = (board: string, thread: number): Promise<any[]> =>
    fourChanClient
      .getJSONFromRelativeURL<any>(`/${board}/thread/${thread}.json`)
      .then(json => json.posts)
      .then(posts => this.addAdditionalInformation(posts, board));

  public getPost = (
    board: string,
    thread: number,
    postId: number
  ): Promise<any> =>
    this.getPosts(board, thread).then(posts =>
      posts.find(post => post.no === postId)
    );
  private addAdditionalInformation(posts: any[], board: string): any {
    let arr: any[] = [];
    for (const post of posts) {
      arr = arr.concat({ ...post, boardId: board });
    }
    return arr;
  }
}

export default new BoardService();
