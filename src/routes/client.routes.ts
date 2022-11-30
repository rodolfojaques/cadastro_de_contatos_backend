import { Router } from "express"
import createClienteController from "../controllers/createClient.controller"
import deleteClientController from "../controllers/deleteClient.controller"
import updateClientController from "../controllers/updateClient.controller"
import listClientsController from "../controllers/listclient.controller"

const clientRouter = Router()

clientRouter.post('', createClienteController)
clientRouter.get('', listClientsController)
clientRouter.patch('/:id', updateClientController)
clientRouter.delete('/:id', deleteClientController)

export default clientRouter