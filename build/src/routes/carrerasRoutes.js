"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrerasController_1 = require("../controllers/carrerasController");
class CarrerasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', carrerasController_1.carrerasController.list);
        this.router.get('/:idCarrera', carrerasController_1.carrerasController.listid);
    }
}
const carrerasRoutes = new CarrerasRoutes().router;
exports.default = carrerasRoutes;
