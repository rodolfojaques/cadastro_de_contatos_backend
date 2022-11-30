import express from "express"
import clientRouter from "./routes/client.routes"
import contactRouter from "./routes/contact.routes"

const app = express()

app.use(express.json())

app.use("/client", clientRouter)
app.use("/contact", contactRouter)

export default app