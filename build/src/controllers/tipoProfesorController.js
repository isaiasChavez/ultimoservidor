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
exports.tipoProfesoresController = void 0;
const database_1 = __importDefault(require("../../database"));
class TipoProfesoresController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM tipoProfesor order by idTipoProfesor');
            console.log(respuesta);
            res.json(respuesta);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let consulta = 'SELECT * FROM tipoProfesor WHERE idTipoProfesor = ' + id;
            const respuesta = yield database_1.default.query(consulta);
            console.log(consulta);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'tipo Profesores no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = database_1.default.query("INSERT INTO tipoProfesor set ?", [req.body]);
            res.json(resp);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTipoProfesor } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM tipoProfesor WHERE idTipoProfesor = ${idTipoProfesor}`);
            res.json(resp);
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTipoProfesor } = req.params;
            console.log(req.params);
            const resp = yield database_1.default.query("UPDATE tipoProfesor set ? WHERE idTipoProfesor= ?", [req.body, idTipoProfesor]);
            res.json(resp);
        });
    }
}
exports.tipoProfesoresController = new TipoProfesoresController();
