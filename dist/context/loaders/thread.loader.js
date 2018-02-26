"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_class_1 = require("./loader.class");
const thread_service_1 = require("../../services/thread.service");
exports.default = new loader_class_1.default((board, thread) => thread_service_1.default.getThread(board, thread), (board) => thread_service_1.default.getThreads(board));
//# sourceMappingURL=thread.loader.js.map