"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var root_1 = __importDefault(require("../controllers/root"));
var router = express_1.default.Router({
    caseSensitive: false
});
router.get('/', root_1.default.get);
router.post('/', root_1.default.post);
exports.default = router;
