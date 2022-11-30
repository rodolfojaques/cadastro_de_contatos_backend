import { IClientRequest, IClientUpdateRequest } from "../../interfaces/client";
import { IContactsRequest, IContactUpdateRequest } from "../../interfaces/contacts";

export const mockClient : IClientRequest = {
    fullName: "João Macedo",
    email: "joe@mail.com",
    telephone: "990000999"
}

export const mockClientUpdate : IClientUpdateRequest = {
    fullName: "João Macedo Up",
    email: "joeUP@mail.com"
}

export const mockContact : IContactsRequest = {
    fullName: "Jairo Loko",
    email: "jairo@mail.com",
    telephone: "990000222"
}

export const mockContactUpdate : IContactUpdateRequest = {
    fullName: "Jairo 66 Loko",
    email: "jairo66@mail.com"
}

export const mockContact2 : IContactsRequest = {
    fullName: "Jamir Loko",
    email: "jamir@mail.com",
    telephone: "990000222"
}

export const mockContactUpdate2 : IContactUpdateRequest = {
    fullName: "Jamir 66 Loko",
    email: "jamir66@mail.com"
}