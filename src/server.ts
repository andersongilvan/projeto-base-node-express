import "reflect-metadata"
import express from "express"
import { AppDataSource } from "./config/dataSource"
import { routes } from "./routes"

AppDataSource.initialize().then(() => {

    console.log("Conected")
    const app = express()
    routes(app)
    app.listen(3000, () => { console.log("Server is running") })

})




