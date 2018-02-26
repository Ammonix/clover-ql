import Loader from "./loader.class";
import postService from "../../services/post.service";

export default new Loader(
  (board: string, thread: number, post: number): Promise<any> =>
    postService.getPost(board, thread, post),
  (board: string, thread: number): Promise<any[]> =>
    postService.getPosts(board, thread)
);
