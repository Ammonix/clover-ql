import Loader from "./loader.class";
import threadService from "../../services/thread.service";
export default new Loader(
  (board: string, thread: number): Promise<any> =>
    threadService.getThread(board, thread),
  (board: string): Promise<any[]> => threadService.getThreads(board)
);
