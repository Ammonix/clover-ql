import fourChanClient from "../clients/fourChan.client";

class ThreadService {
  public getThreads = (board: string): Promise<any[]> =>
    fourChanClient
      .getJSONFromRelativeURL<any>(`/${board}/threads.json`)
      .then(this.flatten)
      .then(threads => this.addAdditionalInformation(threads, board));

  public getThread = (board: string, thread: number): Promise<any> =>
    this.getThreads(board).then(threads =>
      threads.find(post => post.no === thread)
    );
  private flatten(pages: any[]): any[] {
    let arr: any[] = [];
    for (const page of pages) {
      arr = arr.concat(page.threads);
    }
    return arr;
  }
  private addAdditionalInformation(threads: any[], board: string): any {
    let arr: any[] = [];
    for (const thread of threads) {
      arr = arr.concat({ ...thread, boardId: board });
    }
    return arr;
  }
}

export default new ThreadService();
