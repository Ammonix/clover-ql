import { GraphQLEnumType } from "graphql";

export default new GraphQLEnumType({
  name: "Role",
  values: {
    Mod: { value: "Mod" },
    Admin: { value: "Admin" },
    Manager: { value: "Manager" },
    Developer: { value: "Developer" },
    Founder: { value: "Founder" }
  }
});
