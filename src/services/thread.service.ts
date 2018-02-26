import fourChanClient from "../clients/fourChan.client";

class ThreadService {
  public getThreads = (board: string): Promise<any[]> =>
    fourChanClient
      .getJSONFromRelativeURL<any>(`/${board}/threads.json`)
      .then(this.flatten);

  public getThread = (board: string, thread: number): Promise<any> =>
    this.getThreads(board).then(threads => ({
      ...threads.find(post => post.no === thread),
      boardId: board
    }));
  private flatten(posts: any[]): any[] {
    let arr: any[] = [];
    for (const post of posts) {
      arr = arr.concat(post.threads);
    }
    return arr;
  }
}

export default new ThreadService();
