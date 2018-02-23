import loaders, { Loaders } from "./loaders";

export interface Context {
  loaders: Loaders;
}

export default {
  loaders
} as Context;
