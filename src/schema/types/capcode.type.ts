import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "Capcode",
  values: {
    none: { value: "none" },
    mod: { value: "mod" },
    admin: { value: "admin" },
    admin_highlight: { value: "admin_highlight" },
    manager: { value: "manager" },
    developer: { value: "developer" },
    founder: { value: "founder" }
  }
});
