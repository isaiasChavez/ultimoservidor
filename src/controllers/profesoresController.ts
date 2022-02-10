import { Request, Response } from 'express';
import pool from '../../database';
class ProfesoresController {
	
	public async list(req: Request, res: Response): Promise<void> {
		const respuesta = await pool.query('SELECT * FROM profesores order by idProfesor');
		console.log(respuesta);
		res.json(respuesta);
	}
	




}
export const profesoresController = new ProfesoresController();