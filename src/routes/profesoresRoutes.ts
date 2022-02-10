import { Router } from 'express';
import {profesoresController} from '../controllers/profesoresController';
class ProfesoresRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
	this.router.get('/',profesoresController.list );

}
}
const profesoresRoutes= new ProfesoresRoutes();
export default profesoresRoutes.router;