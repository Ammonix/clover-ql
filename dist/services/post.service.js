"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fourChan_client_1 = require("../clients/fourChan.client");
class BoardService {
    constructor() {
        this.getPosts = (board, thread) => fourChan_client_1.default
            .getJSONFromRelativeURL(`/${board}/thread/${thread}.json`)
            .then(json => json.posts)
            .then(posts => this.addAdditionalInformation(posts, board));
        this.getPost = (board, thread, postId) => this.getPosts(board, thread).then(posts => posts.find(post => post.no === postId));
    }
    addAdditionalInformation(posts, board) {
        let arr = [];
        for (const post of posts) {
            arr = arr.concat({ ...post, boardId: board });
        }
        return arr;
    }
}
exports.default = new BoardService();
//# sourceMappingURL=post.service.js.map