import { Contact } from "../entities/contact.entity"

export interface IClientRequest {
    fullName: string
    email: string
    telephone: string
}

export interface IClientUpdateRequest {
    fullName?: string
    email?: string
    telephone?: string
}

export interface IClientResponse {
    id: string
    fullName: string
    email: string
    telephone: string
    createdAt: Date
    contacts?: Contact[]
}