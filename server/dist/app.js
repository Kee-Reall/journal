"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./routes/auth"));
var root_1 = __importDefault(require("./routes/root"));
var unknown_1 = __importDefault(require("./routes/unknown"));
var getIP_1 = __importDefault(require("./midleware/getIP"));
var app = (0, express_1.default)();
app.set("view engine", "ejs");
app.use(getIP_1.default);
app.use(root_1.default);
app.use(auth_1.default);
app.use(unknown_1.default);
exports.default = app;
