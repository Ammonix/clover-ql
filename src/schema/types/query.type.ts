import { GraphQLList, GraphQLObjectType, GraphQLID } from "graphql";
import BoardType from "./board.type";
import boardService from "../../services/board.service";

export default new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    allBoards: {
      type: new GraphQLList(BoardType),
      description: "All boards on 4Chan.",
      resolve: (root, args, { loaders }) => loaders.board.loadMany()
    },
    board: {
      type: BoardType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (root, args, { loaders }) => loaders.board.load(args.id)
    }
  })
});
