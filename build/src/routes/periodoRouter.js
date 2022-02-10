"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const periodoController_1 = __importDefault(require("../controllers/periodoController"));
class PeriodoRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new periodoController_1.default();
        this.config();
    }
    config() {
        this.router.get("/", this.controller.obtenerPeriodos);
        this.router.get("/:idPeriodo", this.controller.obtenerPeriodo);
    }
}
const periodoRouter = new PeriodoRouter().router;
exports.default = periodoRouter;
