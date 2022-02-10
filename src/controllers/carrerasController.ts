import {Request,Response} from 'express';
import pool from '../../database';
class CarrerasController
{

    constructor(){
        
    }
	
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM carreras order by codigoCarrera');
		console.log(respuesta);
		res.json( respuesta );
	}

	public async listid(req: Request, res: Response ): Promise<void>
	{
		const {idCarrera}=req.params
		const query = `SELECT * FROM carreras WHERE idCarrera=${idCarrera}`
		const respuesta =await pool.query(query);
		res.send( respuesta );
	}

}
export const carrerasController = new CarrerasController();