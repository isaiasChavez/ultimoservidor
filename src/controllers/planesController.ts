import {Request,Response} from 'express';
import pool from '../../database';
class PlanesController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM planes order by idPlan');
		console.log(respuesta);
		res.json( respuesta );
	}
	
	public async lisPlanes(req: Request, res:Response):Promise<void>
	{
       const {idPlan}= req.params
	   const query =`SELECT * FROM planes WHERE idPlan= ${idPlan}`
	   const respuesta= await pool.query(query)
	   res.send(respuesta)
	}
	


}
export const planesController = new PlanesController();
