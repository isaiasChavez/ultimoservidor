import { Router } from 'express';
import PeriodoController from '../controllers/periodoController';



class PeriodoRouter{

    router:Router = Router()
    controller:PeriodoController= new PeriodoController()
    constructor(){
        this.config()

    }

    config(){   
        this.router.get("/",this.controller.obtenerPeriodos)
        this.router.get("/:idPeriodo",this.controller.obtenerPeriodo)
    }



}

const periodoRouter = new PeriodoRouter().router

export default periodoRouter