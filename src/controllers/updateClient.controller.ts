import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import updateClientService from "../services/updateClient.service";

const updateClientController = async (req:Request, res:Response) => {
    try {
        const { id } = req.params
        const data = req.body

        const clienteUpdated = await updateClientService(id, data)

        return res.json({
            message: "Client atualized"
        })
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default updateClientController