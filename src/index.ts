import app from "./app";
const port = process.env.PORT || 4000;
app.listen(port);
console.debug(`express runs on port ${port}`);
