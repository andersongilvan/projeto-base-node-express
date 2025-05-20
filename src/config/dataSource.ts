import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type : "sqlite",
    database : "./src/database/database.sqlite",
    entities : ["./src/entities/*.ts"],
    synchronize : true
})