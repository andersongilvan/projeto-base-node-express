import express, { Express } from "express";
import { categoryRoute } from "./categoryRoutes";

export function routes(app: Express) {
    app.use(express.json())
    app.get("/", (request, response) => {
        response.status(200).json({ message: "Dev Car" })
    })

    app.use("/categories", categoryRoute)
}