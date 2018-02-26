import Loader from "./loader.class";
import boardService from "../../services/board.service";

export default new Loader(
  (board: string): Promise<any> => boardService.getBoard(board),
  (): Promise<any[]> => boardService.getBoards()
);
