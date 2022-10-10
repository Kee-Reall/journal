"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var unknown_1 = __importDefault(require("../controllers/unknown"));
var router = express_1.default.Router();
router.get('*', unknown_1.default);
exports.default = router;
