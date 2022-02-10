import express, {Application} from 'express';
import indexRoutes from './src/routes/indexRoutes';
import institutosRoutes from './src/routes/institutosRoutes';
import carrerasRoutes from './src/routes/carrerasRoutes';
import profesoresRoutes from './src/routes/profesoresRoutes';
import tipoProfesorRoutes from './src/routes/tipoProfesorRoutes';
import cors from 'cors';
import planesRoutes from './src/routes/planesRoutes';
import periodoRouter from './src/routes/periodoRouter';
import morgan from 'morgan'
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
}
config (): void
{
this.app.set('port',process.env.PORT|| 3000);
this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
this.app.use(cors())
this.app.use(morgan('dev'))
}
routes (): void
{

	this.app.use(indexRoutes);
	this.app.use('/api/institutos',institutosRoutes);
	this.app.use('/api/carreras',carrerasRoutes);
	this.app.use('/api/profesores',profesoresRoutes);
	this.app.use('/api/tipoProfesor',tipoProfesorRoutes);
	this.app.use('/api/planes',planesRoutes);
	this.app.use('/api/periodo',periodoRouter)

}
start (): void
{

this.app.listen(this.app.get('port'), () =>
{

console.log('Server on port',this.app.get('port'));

});
}
}
const server = new Server();
server.start();