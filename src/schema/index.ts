import { GraphQLSchema } from "graphql";
import { QueryType } from "./types/query.type";

export default new GraphQLSchema({
  query: QueryType
});
