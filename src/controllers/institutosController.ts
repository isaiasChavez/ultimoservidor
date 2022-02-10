import {Request,Response} from 'express';
import pool from '../../database';
class InstitutosController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM institutos order by idInstituto');
		console.log(respuesta);
		res.json( respuesta );
	}

	public async mostrarPorId(req:Request, res:Response) {
		const { id } = req.params
		const responser = await pool.query(`SELECT * FROM institutos where idInstituto = ${id}` )
		
		res.json(responser)
		
	}
	
	

	
}
export const institutosController = new InstitutosController();