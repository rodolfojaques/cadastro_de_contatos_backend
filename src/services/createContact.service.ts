import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../error/appError";
import { IContactsRequest, IContactsResponse } from "../interfaces/contacts";

const createContactService = async (id_client:string, {fullName, email, telephone}:IContactsRequest): Promise<IContactsResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({id: id_client})
    if(!client){
        throw new AppError(400, "client not found")
    }

    client

    const contact = new Contact()
    contact.fullName = fullName
    contact.email = email
    contact.telephone = telephone
    contact.client = client

    contactRepository.create(contact)
    await contactRepository.save(contact)

    return contact
}

export default createContactService
