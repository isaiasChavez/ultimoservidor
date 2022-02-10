import { Request,Response } from "express";
import pool from '../../database'

class PeriodoController{

    constructor(){
        
    }

    public async obtenerPeriodos(req:Request,res:Response){

        
        const query ="SELECT * FROM periodo"
        const respuestBaseDeDatos = await pool.query(query)

        res.status(200).send(respuestBaseDeDatos)


    }

    public async obtenerPeriodo(req:Request,res:Response){

        const {idPeriodo} = req.params
        
        const query =`SELECT * FROM periodo where idPeriodo = ${idPeriodo}`
        const respuestBaseDeDatos = await pool.query(query)

        res.status(200).send(respuestBaseDeDatos)

    }
}

export default PeriodoController




