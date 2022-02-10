import {Request,Response} from 'express';
import pool from '../../database';
class MateriaController
{
	public async list(req: Request, res: Response ): Promise<void>
	{
		const respuesta = await pool.query('SELECT * FROM materia order by idMateria');
		console.log(respuesta);
		res.json( respuesta );
	}
	public async listOne(req: Request, res: Response): Promise <void>{
		const {id} = req.params;
		let consulta='SELECT * FROM materia WHERE idMateria = '+id;
		const respuesta = await pool.query(consulta); 
		console.log(consulta);
		if(respuesta.length>0){
			res.json(respuesta[0]);
			return ;
		}
		res.status(404).json({'mensaje': 'materia no encontrada'});
	}
	public async create (req:Request, res:Response): Promise <void>{
        const resp = pool.query("INSERT INTO materia set ?",[req.body]);
        res.json(resp);
	}
	
	public async delete (req:Request, res:Response): Promise <void>{
		const {idmateria} = req.params
		const resp= await pool.query (`DELETE FROM materia WHERE idMateria = ${idmateria}`);
		res.json(resp);
	}
	public async actualizar(req: Request, res: Response): Promise<void> {
		const { idMateria } = req.params;
		console.log(req.params);
		const resp = await pool.query("UPDATE materia set ? WHERE idMateria= ?", [req.body, idMateria]);
		res.json(resp);
		}

	


}
export const materiaController = new MateriaController();