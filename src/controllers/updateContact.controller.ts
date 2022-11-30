import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import updateContactService from "../services/updateContact.service";

const updateContactController = async (req:Request, res:Response) => {
    try {
        const { id_contact } = req.params
        const data = req.body

        const contacteUpdated = await updateContactService(id_contact, data)

        return res.json({
            message: "Contact atualized"
        })
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default updateContactController