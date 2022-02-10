import { Router } from 'express';
import { carrerasController } from '../controllers/carrerasController';

class CarrerasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',carrerasController.list );
	this.router.get('/:idCarrera',carrerasController.listid)

}
}
const carrerasRoutes= new CarrerasRoutes().router;
export default carrerasRoutes;