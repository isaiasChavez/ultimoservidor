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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
class PeriodoController {
    constructor() {
    }
    obtenerPeriodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM periodo";
            const respuestBaseDeDatos = yield database_1.default.query(query);
            res.status(200).send(respuestBaseDeDatos);
        });
    }
    obtenerPeriodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPeriodo } = req.params;
            const query = `SELECT * FROM periodo where idPeriodo = ${idPeriodo}`;
            const respuestBaseDeDatos = yield database_1.default.query(query);
            res.status(200).send(respuestBaseDeDatos);
        });
    }
}
exports.default = PeriodoController;
