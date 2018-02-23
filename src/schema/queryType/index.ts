// import { BoardType } from "./boardType";
// import { GraphQLList, GraphQLObjectType, GraphQLID } from "graphql";
// import resolver from "../../resolver";

// export const QueryType = new GraphQLObjectType({
//   name: "Query",
//   description: "The root of all queries",
//   fields: () => ({
//     allBoards: {
//       type: new GraphQLList(BoardType),
//       resolve: () => resolver.boards().toPromise()
//     },
//     board: {
//       type: BoardType,
//       args: {
//         id: { type: GraphQLID }
//       },
//       resolve: (root, args) => resolver.board(args.id).toPromise()
//     }
//   })
// });
