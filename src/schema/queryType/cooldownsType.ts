import { GraphQLObjectType, GraphQLInt } from "graphql";

export const CooldownsType = new GraphQLObjectType({
  name: "cooldowns",
  description: "Default posting cooldowns in ms.",
  fields: () => ({
    threads: {
      type: GraphQLInt,
      resolve: cooldowns => cooldowns.threads
    },
    replies: {
      type: GraphQLInt,
      resolve: cooldowns => cooldowns.replies
    },
    images: {
      type: GraphQLInt,
      resolve: cooldowns => cooldowns.images
    }
  })
});
