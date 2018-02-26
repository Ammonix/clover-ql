"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_class_1 = require("./loader.class");
const board_service_1 = require("../../services/board.service");
exports.default = new loader_class_1.default((board) => board_service_1.default.getBoard(board), () => board_service_1.default.getBoards());
//# sourceMappingURL=board.loader.js.map