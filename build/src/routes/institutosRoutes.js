"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutosController_1 = require("../controllers/institutosController");
class InstitutosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', institutosController_1.institutosController.mostrarPorId);
        this.router.get('/', institutosController_1.institutosController.list);
    }
}
const institutosRoutes = new InstitutosRoutes();
exports.default = institutosRoutes.router;
