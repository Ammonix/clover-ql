import { GraphQLList, GraphQLObjectType, GraphQLID } from "graphql";
import boardResolver from "../../resolvers/board.resolver";
import { BoardType } from "./board.type";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries",
  fields: () => ({
    allBoards: {
      type: new GraphQLList(BoardType),
      resolve: () => boardResolver.boards().toPromise()
    },
    board: {
      type: BoardType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (root, args) => boardResolver.board(args.id).toPromise()
    }
  })
});
