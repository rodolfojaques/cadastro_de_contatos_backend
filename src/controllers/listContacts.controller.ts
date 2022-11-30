import { Request, Response } from "express";
import listContactsService from "../services/listContacts.service";

const listContactsController = async (req:Request, res:Response) => {
    const contacts = await listContactsService()
    return res.json(contacts)
}

export default listContactsController