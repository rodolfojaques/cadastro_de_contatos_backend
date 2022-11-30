import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../error/appError";
import { IClientRequest, IClientResponse } from "../interfaces/client";

const createClienteService = async ({fullName, email, telephone}:IClientRequest): Promise<IClientResponse> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const emailAlreadyExists = await clientRepository.findOneBy({email: email})
    if(!!emailAlreadyExists){
        throw new AppError(400, "Client already exists")
    }

    const client = new Client()
    client.fullName = fullName
    client.email = email
    client.telephone = telephone

    clientRepository.create(client)
    await clientRepository.save(client)

    return client
}

export default createClienteService