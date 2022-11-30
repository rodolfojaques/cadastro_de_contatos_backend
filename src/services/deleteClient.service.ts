import AppDataSource from "../data-source"
import { Client } from "../entities/client.entity"
import { AppError } from "../error/appError"

const deleteCleintService = async (id:string) => {
    const clientRepository = AppDataSource.getRepository(Client)
    
    const account = await clientRepository.findOneBy({id: id})
    
    if(!account){
        throw new AppError(404, "User not found")
    }

    await clientRepository.delete(account)

    return true
}

export default deleteCleintService