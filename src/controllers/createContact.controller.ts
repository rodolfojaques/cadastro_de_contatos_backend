import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import createContactService from "../services/createContact.service";

const createContactController = async (req:Request, res:Response) => {
    try {
        const {fullName, email, telephone} = req.body
        const { id_client } = req.params

        const contact = await createContactService(id_client, {fullName, email, telephone})

        return res.status(201).json(contact)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}

export default createContactController