import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "FileExtension",
  values: {
    jpg: { value: ".jpg" },
    png: { value: ".png" },
    gif: { value: ".gif" },
    pdf: { value: ".pdf" },
    swf: { value: ".swf" },
    webm: { value: ".webm" }
  }
});
