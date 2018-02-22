import { GraphQLObjectType, GraphQLString } from "graphql";

export const BoardType = new GraphQLObjectType({
  name: "Board",
  description: "A list of boards",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: board => board.board
    }
  })
});
