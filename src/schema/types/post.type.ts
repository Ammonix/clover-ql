import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLEnumType
} from "graphql";
import RoleType from "./role.type";
import CapcodeType from "./capcode.type";
import FileExtensionType from "./fileExtension.type";

export default new GraphQLObjectType({
  name: "Post",
  description: "A Posts",
  fields: () => ({
    postNumber: {
      type: GraphQLInt,
      resolve: post => post.no
    },
    replyTo: {
      type: GraphQLInt,
      resolve: post => post.resto
    },
    isSticky: {
      type: GraphQLBoolean,
      resolve: post => !!post.sticky
    },
    isClosed: {
      type: GraphQLBoolean,
      resolve: post => !!post.close
    },
    isArchived: {
      type: GraphQLBoolean,
      resolve: post => !!post.archived
    },
    archivedOn: {
      type: GraphQLInt,
      description: "UNIX timestamp",
      resolve: post => post.archived_on
    },
    dateAndTime: {
      type: GraphQLString,
      description: "MM/DD/YY(Day)HH:MM (:SS on some boards), EST/EDT timezone",
      resolve: post => post.now
    },
    time: {
      type: GraphQLInt,
      description: "UNIX timestamp",
      resolve: post => post.time
    },
    name: {
      type: GraphQLString,
      resolve: post => post.name
    },
    tripcode: {
      type: GraphQLString,
      resolve: post => post.tripcode
    },
    role: {
      type: RoleType,
      resolve: post => post.id
    },
    capcode: {
      type: CapcodeType,
      resolve: post => post.capcode
    },
    countryCode: {
      type: GraphQLString,
      description: "text (2 characters, ISO 3166-1 alpha-2), XX (unknown)",
      resolve: post => post.country
    },
    countryName: {
      type: GraphQLString,
      resolve: post => post.country_name
    },
    subject: {
      type: GraphQLString,
      resolve: post => post.sub
    },
    comment: {
      type: GraphQLString,
      resolve: post => post.com
    },
    renamedFilename: {
      type: GraphQLInt,
      description: "UNIX timestamp + milliseconds",
      resolve: post => post.tim
    },
    filename: {
      type: GraphQLString,
      resolve: post => post.filename
    },
    fileExtension: {
      type: FileExtensionType,
      resolve: post => post.ext
    },
    fileSize: {
      type: GraphQLInt,
      resolve: post => post.fsize
    },
    fileMD5: {
      type: GraphQLString,
      description: "24 character, packed base64 MD5 hash",
      resolve: post => post.md5
    },
    imageWidth: {
      type: GraphQLInt,
      resolve: post => post.w
    },
    imageHeight: {
      type: GraphQLInt,
      resolve: post => post.h
    },
    thumbnailWidth: {
      type: GraphQLInt,
      resolve: post => post.tn_w
    },
    thumbnaiHeight: {
      type: GraphQLInt,
      resolve: post => post.tn_h
    },
    isFileDeleted: {
      type: GraphQLBoolean,
      resolve: post => !!post.filedeleted
    },
    isFileSpoiler: {
      type: GraphQLBoolean,
      resolve: post => !!post.spoiler
    },
    customSpoilers: {
      type: GraphQLInt,
      resolve: post => post.custom_spoiler
    },
    omittedPosts: {
      type: GraphQLInt,
      resolve: post => post.omitted_posts
    },
    omittedImages: {
      type: GraphQLInt,
      resolve: post => post.omitted_images
    },
    repliesTotal: {
      type: GraphQLInt,
      resolve: post => post.replies
    },
    imagesTotal: {
      type: GraphQLInt,
      resolve: post => post.images
    },
    isBumplimitMet: {
      type: GraphQLBoolean,
      resolve: post => !!post.bumplimit
    },
    isImageLimit: {
      type: GraphQLBoolean,
      resolve: post => !!post.imagelimit
    },
    lastModified: {
      type: GraphQLInt,
      description: "UNIX timestamp",
      resolve: post => post.last_modified
    },
    tag: {
      type: GraphQLString,
      resolve: post => post.tag
    },
    semanticUrl: {
      type: GraphQLString,
      resolve: post => post.semantic_url
    },
    absoluteFilePath: {
      type: GraphQLString,
      resolve: (root, args, { loaders: { postLoader } }) =>
        `https://i.4cdn.org/${root.boardId}/${root.tim}${root.ext}`
    },
    since4pass: {
      type: GraphQLInt,
      description: "Year 4chan Pass bought, 4 digit year (YYYY)",
      resolve: post => post.since4pass
    }
  })
});
