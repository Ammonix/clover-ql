import * as DataLoader from "dataloader";
import boardsLoader from "./boards.loader";
export interface Loaders {
  boards: DataLoader<any, any>;
}

export default {
  boards: boardsLoader
} as Loaders;
