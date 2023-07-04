"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
if (((_a = process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== "production")
    (0, dotenv_1.config)();
const grammy_1 = require("grammy");
const runner_1 = require("@grammyjs/runner");
const BOT_TOKEN = (_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.BOT_TOKEN;
const bot = new grammy_1.Bot(BOT_TOKEN);
bot.on("message", (ctx) => __awaiter(void 0, void 0, void 0, function* () { var _c; return yield ctx.reply(((_c = ctx === null || ctx === void 0 ? void 0 : ctx.message.text) !== null && _c !== void 0 ? _c : "").replace(/\s/g, "🤸")); }));
(0, runner_1.run)(bot);
