import * as DataLoader from "dataloader";
import cacheMap from "../../cacheMap";
import postService from "../../services/post.service";

const postsLoader = new DataLoader(
  keys => Promise.all(keys.map(postService.getPosts))
  //   {
  //     cacheMap
  //   }
);

const postLoader = new DataLoader(
  keys => Promise.all(keys.map(key => postService.getPost))
  //   {
  //     cacheKeyFn: key => `/posts/${key}/`,
  //     cacheMap
  //   }
);

postLoader.loadMany = postsLoader.load.bind(postsLoader);

export default postLoader;
