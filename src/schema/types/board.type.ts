import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} from "graphql";
import { CooldownsType } from "./cooldowns.type";

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
    },
    isNsfw: {
      type: GraphQLBoolean,
      resolve: board => !board.ws_board
    },
    maxPageCount: {
      type: GraphQLInt,
      resolve: board => board.pages
    },
    maxThreadsPerPage: {
      type: GraphQLInt,
      resolve: board => board.per_page
    },
    maxImgFilesize: {
      type: GraphQLInt,
      resolve: board => board.max_filesize
    },
    maxWebmFilesize: {
      type: GraphQLInt,
      resolve: board => board.max_webm_filesize
    },
    maxCommentChars: {
      type: GraphQLInt,
      resolve: board => board.max_comment_chars
    },
    maxWebmDuration: {
      type: GraphQLInt,
      resolve: board => board.max_webm_duration
    },
    bumpLimit: {
      type: GraphQLInt,
      resolve: board => board.bump_limit
    },
    imageLimit: {
      type: GraphQLInt,
      resolve: board => board.image_limit
    },
    cooldowns: {
      type: CooldownsType,
      resolve: board => board.cooldowns
    },
    isArchived: {
      type: GraphQLBoolean,
      resolve: board => board.is_archived
    }
  })
});
