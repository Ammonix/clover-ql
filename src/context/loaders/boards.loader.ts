import * as DataLoader from "dataloader";
import boardService from "../../services/board.service";
import cacheMap from "../../cacheMap";

export default new DataLoader(
  keys => Promise.all(keys.map(boardService.getBoards)),
  {
    cacheMap
  }
);
