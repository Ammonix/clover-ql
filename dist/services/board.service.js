"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fourChan_client_1 = require("../clients/fourChan.client");
class BoardService {
    constructor() {
        this.getBoards = () => fourChan_client_1.default.getJSONFromRelativeURL("/boards.json").then(json => json.boards);
        this.getBoard = (id) => this.getBoards().then(boards => boards.find(board => board.board === id));
    }
}
exports.default = new BoardService();
//# sourceMappingURL=board.service.js.map