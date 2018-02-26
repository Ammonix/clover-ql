import fourChanClient from "../clients/fourChan.client";

class BoardService {
  public getPosts = (board: string, thread: number): Promise<any[]> =>
    fourChanClient
      .getJSONFromRelativeURL<any>(`/${board}/thread/${thread}.json`)
      .then(json => json.posts);

  public getPost = (
    board: string,
    thread: number,
    postId: number
  ): Promise<any> =>
    this.getPosts(board, thread).then(posts =>
      posts.find(post => post.no === postId)
    );
}

export default new BoardService();
