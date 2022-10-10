"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbURI = exports.port = void 0;
var dotenv = __importStar(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv.config({
    path: path_1.default.resolve('config', 'Variables')
});
var dbHost = (_a = process.env.dbHost) !== null && _a !== void 0 ? _a : 'localhost';
var dbPort = (_b = process.env.dbPort) !== null && _b !== void 0 ? _b : '27017';
var dbName = (_c = process.env.dbName) !== null && _c !== void 0 ? _c : 'posts';
exports.port = (_d = process.env.port) !== null && _d !== void 0 ? _d : 8000;
exports.dbURI = "mongodb://".concat(dbHost, ":").concat(dbPort, "/").concat(dbName);
