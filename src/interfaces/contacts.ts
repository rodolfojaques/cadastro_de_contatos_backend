import { Client } from "../entities/client.entity"

export interface IContactsRequest {
    fullName: string
    email: string
    telephone: string
}

export interface IContactsResponse {
    id: string
    fullName: string
    email: string
    telephone: string
    client?: Client
}

export interface IContactUpdateRequest {
    fullName?: string
    email?: string
    telephone?: string
}