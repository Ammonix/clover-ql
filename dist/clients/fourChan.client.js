"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
class FourChanClient {
    constructor() {
        this.BASE_URL = "https://a.4cdn.org";
        this.getJSONFromRelativeURL = (relativeURL) => node_fetch_1.default(`${this.BASE_URL}${relativeURL}`).then(response => response.json());
    }
}
exports.default = new FourChanClient();
//# sourceMappingURL=fourChan.client.js.map