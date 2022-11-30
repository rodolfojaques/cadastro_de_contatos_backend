import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import deleteContactService from "../services/deleteContact.service";

const deleteContactController = async (req:Request, res:Response) => {
    try {
        const { id_contact } = req.params

        const contactDeleted = await deleteContactService(id_contact)

        return res.status(204).json()
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default deleteContactController