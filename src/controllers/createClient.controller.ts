import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import createClientService from "../services/createClient.service";

const createClienteController = async (req:Request, res:Response) => {
    try {
        const {fullName, email, telephone} = req.body

        const client = await createClientService({fullName, email, telephone})

        return res.status(201).json(client)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default createClienteController