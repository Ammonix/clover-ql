"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 4000;
app_1.default.listen(port);
console.debug(`express runs on port ${port}`);
//# sourceMappingURL=index.js.map