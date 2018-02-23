import app from "./app";
const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.debug(`Example app listening on port  ${port}!`)
);
