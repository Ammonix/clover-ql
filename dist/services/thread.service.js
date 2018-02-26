"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fourChan_client_1 = require("../clients/fourChan.client");
class ThreadService {
    constructor() {
        this.getThreads = (board) => fourChan_client_1.default
            .getJSONFromRelativeURL(`/${board}/threads.json`)
            .then(this.flatten)
            .then(threads => this.addAdditionalInformation(threads, board));
        this.getThread = (board, thread) => this.getThreads(board).then(threads => threads.find(post => post.no === thread));
    }
    flatten(pages) {
        let arr = [];
        for (const page of pages) {
            arr = arr.concat(page.threads);
        }
        return arr;
    }
    addAdditionalInformation(threads, board) {
        let arr = [];
        for (const thread of threads) {
            arr = arr.concat({ ...thread, boardId: board });
        }
        return arr;
    }
}
exports.default = new ThreadService();
//# sourceMappingURL=thread.service.js.map