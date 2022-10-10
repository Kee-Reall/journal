"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIP(req, _, next) {
    var _a;
    console.log((_a = req.socket.remoteAddress) !== null && _a !== void 0 ? _a : "IP is ".concat(undefined));
    next();
}
exports.default = getIP;
