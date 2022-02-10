import { Router } from 'express';
import {institutosController} from '../controllers/institutosController';
class InstitutosRoutes
{
	public router: Router=Router();

	constructor()
	{
		this.config();
	}
	config() : void
	{
		this.router.get('/:id',institutosController.mostrarPorId)
		this.router.get('/',institutosController.list );
		
		
	}
}
const institutosRoutes= new InstitutosRoutes();
export default institutosRoutes.router;