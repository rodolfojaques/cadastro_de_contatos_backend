import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../error/appError";
import { IContactUpdateRequest } from "../interfaces/contacts";

const updateContactService = async (id_contact:string, data:IContactUpdateRequest) => {
    try {
        const contactRepository = AppDataSource.getRepository(Contact)

        await contactRepository.update(id_contact, {...data})

        const contact = await contactRepository.findOneBy({id: id_contact})

        return contact
    } catch (error) {
        throw new AppError(400, "Update fail")
    }
}

export default updateContactService