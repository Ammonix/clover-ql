"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rm = require("typed-rest-client/RestClient");
const fromPromise_1 = require("rxjs/Observable/fromPromise");
const operators_1 = require("rxjs/operators");
const client = new rm.RestClient("4chan-rest-api", "https://a.4cdn.org");
const get = (resource) => fromPromise_1.fromPromise(client.get(resource)).pipe(operators_1.map(response => response.result));
class Resolver {
    boards() {
        return get("/boards.json").pipe(operators_1.map(result => result.boards));
    }
    board(id) {
        return this.boards().pipe(operators_1.map(boards => boards.find(board => board.board === id)));
    }
}
exports.default = new Resolver();
//# sourceMappingURL=index.js.map