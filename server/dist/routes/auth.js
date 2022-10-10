"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("../controllers/auth"));
var getHandler = auth_1.default.getHandler, postHandler = auth_1.default.postHandler;
var router = express_1.default.Router();
router.get('/auth', getHandler);
router.post('/auth', postHandler);
exports.default = router;
