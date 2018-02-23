import * as DataLoader from "dataloader";
import boardService from "../../services/board.service";
import cacheMap from "../../cacheMap";
import boardsLoader from "./boards.loader";

const boardLoader = new DataLoader(
  keys => Promise.all(keys.map(boardService.getBoard)),
  {
    cacheKeyFn: key => `/boards/${key}/`,
    cacheMap
  }
);

// const BoardByURLLoader = new DataLoader(keys => Promise.all(keys.map(getPersonByURL)), {cacheMap});
boardLoader.loadMany = boardsLoader.load.bind(boardsLoader, "__all__");
// boardLoader.loadByURL = BoardByURLLoader.load.bind(BoardByURLLoader);
// boardLoader.loadManyByURL = BoardByURLLoader.loadMany.bind(BoardByURLLoader);

export default boardLoader;
