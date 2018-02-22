import { GraphQLObjectType, GraphQLString } from "graphql";

export const BoardType = new GraphQLObjectType({
  name: "Board",
  description: "A board",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: board => board.board
    },
    name: {
      type: GraphQLString,
      resolve: board => board.title
    },
    description: {
      type: GraphQLString,
      resolve: board => board.meta_description
    }
  })
});
