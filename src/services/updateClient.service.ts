import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../error/appError";
import { IClientUpdateRequest } from "../interfaces/client";

const updateClientService = async (id:string, data:IClientUpdateRequest) => {
    try {
        const clientRepository = AppDataSource.getRepository(Client)

        await clientRepository.update(id, {...data})

        const client = await clientRepository.findOneBy({id: id})

        return client
    } catch (error) {
        throw new AppError(400, "Update fail")
    }
}

export default updateClientService