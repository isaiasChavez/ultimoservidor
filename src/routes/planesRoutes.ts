import { Router } from 'express';
import {planesController} from '../controllers/planesController';
class PlanesRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',planesController.list );
	this.router.get( '/:idPlan',planesController.lisPlanes)
}
}
const planesRoutes= new PlanesRoutes();
export default planesRoutes.router;