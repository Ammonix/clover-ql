import { GraphQLList, GraphQLObjectType, GraphQLID } from "graphql";
import { BoardType } from "./board.type";
import boardService from "../../services/board.service";
import { Context } from "../../context";
export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    allBoards: {
      type: new GraphQLList(BoardType),
      description: "All boards on 4Chan.",
      resolve: (root, args, { loaders }: Context) => loaders.boards.load('__all__')
    }
  })
});
