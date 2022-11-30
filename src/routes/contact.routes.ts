import { Router } from "express"
import createContactController from "../controllers/createContact.controller"
import deleteContactController from "../controllers/deleteContact.controller"
import listContactsController from "../controllers/listContacts.controller"
import updateContactController from "../controllers/updateContact.controller"

const contactRouter = Router()

contactRouter.get("", listContactsController)
contactRouter.post("/:id_client", createContactController)
contactRouter.patch("/:id_contact", updateContactController)
contactRouter.delete("/:id_contact", deleteContactController)

export default contactRouter