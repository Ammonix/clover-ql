import * as DataLoader from "dataloader";
import boardService from "../../services/board.service";
import cacheMap from "../../cacheMap";

const boardsLoader = new DataLoader(
  keys => Promise.all(keys.map(boardService.getBoards)),
  // {
  //   cacheMap
  // }
);

const boardLoader = new DataLoader(
  keys => Promise.all(keys.map(boardService.getBoard)),
  // {
  //   cacheKeyFn: key => `/boards/${key}/`,
  //   cacheMap
  // }
);

boardLoader.loadMany = boardsLoader.load.bind(boardsLoader, "__all__");

export default boardLoader;
