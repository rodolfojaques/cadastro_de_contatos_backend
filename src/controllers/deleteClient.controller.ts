import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import deleteCleintService from "../services/deleteClient.service";

const deleteClientController = async (req:Request, res:Response) => {
    try {
        const { id } = req.params

        const clientDeleted = await deleteCleintService(id)

        return res.status(204).json()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default deleteClientController