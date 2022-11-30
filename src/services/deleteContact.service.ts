import AppDataSource from "../data-source"
import { Contact } from "../entities/contact.entity"
import { AppError } from "../error/appError"

const deleteContactService = async (id_contact:string) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    
    const account = await contactRepository.findOneBy({id: id_contact})
    
    if(!account){
        throw new AppError(404, "User not found")
    }

    await contactRepository.delete(account)

    return true
}

export default deleteContactService