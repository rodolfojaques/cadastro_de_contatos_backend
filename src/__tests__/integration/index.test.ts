import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
import request from "supertest"
import app from "../../app";
import {mockClient, mockClientUpdate, mockContact, mockContact2, mockContactUpdate} from "../mocks"


describe("/users", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /client -  Must be able to create a client",async () => {
        const response = await request(app).post('/client').send(mockClient)

        expect(response.body.email).toEqual(mockClient.email)
        expect(response.body.fullName).toEqual(mockClient.fullName)
        expect(response.body.telephone).toEqual(mockClient.telephone)
        expect(response.status).toBe(201)        
    })

    test("POST /client -  should not be able to create a client that already exists",async () => {
        const response = await request(app).post('/client').send(mockClient)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
             
    })

    test("GET /client -  Must be able to list client",async () => {
        await request(app).post('/client').send(mockClient)
        const response = await request(app).get('/client')

        expect(response.body).toHaveLength(1)
        expect(response.status).toBe(200)
     
    })

    test("PATCH /client/:id - Must be able to update client", async () => {
        await request(app).post('/client').send(mockClient)

        const UserTobeUpdate = await request(app).get('/client')

        const response = await request(app).patch(`/client/${UserTobeUpdate.body[0].id}`).send(mockClientUpdate)

        
        expect(response.body).toHaveProperty("message")
        expect(response.status).toEqual(200)
    })

    /****************************************************************************************************************************/

    test("POST /contact/:id_client -  Must be able to create a contact",async () => {
        await request(app).post('/client').send(mockClient)

        const UserTobeCreateContact = await request(app).get('/client')

        const response = await request(app).post(`/contact/${UserTobeCreateContact.body[0].id}`).send(mockContact)

        expect(response.body.email).toEqual(mockContact.email)
        expect(response.body.fullName).toEqual(mockContact.fullName)
        expect(response.body.telephone).toEqual(mockContact.telephone)
        expect(response.status).toBe(201)        
    })

    test("GET /contact -  Must be able to list contact",async () => {
        await request(app).post('/client').send(mockClient)

        const UserTobeCreateContact = await request(app).get('/client')

        const contato1 = await request(app).post(`/contact/${UserTobeCreateContact.body[0].id}`).send(mockContact)
        const contato2 = await request(app).post(`/contact/${UserTobeCreateContact.body[0].id}`).send(mockContact2)

        const response = await request(app).get('/contact')

        expect(response.body).toHaveLength(2)
        expect(response.status).toBe(200)
     
    })

    test("DELETE /contact/:id -  Must be able to delete contact",async () => {
        await request(app).post('/client').send(mockClient)

        const UserTobeCreateContact = await request(app).get('/client')

        const contato1 = await request(app).post(`/contact/${UserTobeCreateContact.body[0].id}`).send(mockContact)
        const contato2 = await request(app).post(`/contact/${UserTobeCreateContact.body[0].id}`).send(mockContact2)

        const contactTobeDeleted = await request(app).get('/contact')

        const response = await request(app).delete(`/contact/${contactTobeDeleted.body[0].id}`)

        expect(response.status).toBe(204)
     
    })

})