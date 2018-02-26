"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_class_1 = require("./loader.class");
const post_service_1 = require("../../services/post.service");
exports.default = new loader_class_1.default((board, thread, post) => post_service_1.default.getPost(board, thread, post), (board, thread) => post_service_1.default.getPosts(board, thread));
//# sourceMappingURL=post.loader.js.map