"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planesController_1 = require("../controllers/planesController");
class PlanesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', planesController_1.planesController.list);
        this.router.get('/:idPlan', planesController_1.planesController.lisPlanes);
    }
}
const planesRoutes = new PlanesRoutes();
exports.default = planesRoutes.router;
