"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./src/routes/indexRoutes"));
const institutosRoutes_1 = __importDefault(require("./src/routes/institutosRoutes"));
const carrerasRoutes_1 = __importDefault(require("./src/routes/carrerasRoutes"));
const profesoresRoutes_1 = __importDefault(require("./src/routes/profesoresRoutes"));
const tipoProfesorRoutes_1 = __importDefault(require("./src/routes/tipoProfesorRoutes"));
const cors_1 = __importDefault(require("cors"));
const planesRoutes_1 = __importDefault(require("./src/routes/planesRoutes"));
const periodoRouter_1 = __importDefault(require("./src/routes/periodoRouter"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/institutos', institutosRoutes_1.default);
        this.app.use('/api/carreras', carrerasRoutes_1.default);
        this.app.use('/api/profesores', profesoresRoutes_1.default);
        this.app.use('/api/tipoProfesor', tipoProfesorRoutes_1.default);
        this.app.use('/api/planes', planesRoutes_1.default);
        this.app.use('/api/periodo', periodoRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
