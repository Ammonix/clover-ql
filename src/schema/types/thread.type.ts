import { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLID } from "graphql";
import PostType from "./post.type";

export default new GraphQLObjectType({
  name: "Thread",
  description: "Default posting cooldowns in ms.",
  fields: () => ({
    postNumber: {
      type: GraphQLInt,
      resolve: post => post.no
    },
    lastModified: {
      type: GraphQLInt,
      description: "UNIX timestamp",
      resolve: post => post.last_modified
    },
    allPosts: {
      type: new GraphQLList(PostType)
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLID }
      },
    }
  })
});
