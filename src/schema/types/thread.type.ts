import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLString
} from "graphql";
import PostType from "./post.type";

export default new GraphQLObjectType({
  name: "Thread",
  description: "Default posting cooldowns in ms.",
  fields: () => ({
    threadNumber: {
      type: GraphQLInt,
      resolve: thread => thread.no
    },
    lastModified: {
      type: GraphQLInt,
      description: "UNIX timestamp",
      resolve: thread => thread.last_modified
    },
    allPosts: {
      type: new GraphQLList(PostType),
      resolve: (root, args, { loaders: { postLoader } }) =>
        postLoader.loadMany(root.boardId, root.no)
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (root, args, { loaders: { postLoader } }) =>
        postLoader.load(root.boardId, root.no, args.id)
    }
  })
});
