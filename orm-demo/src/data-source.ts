import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Employee } from "./entity/Employee"
import { Client } from "./entity/Client"
import { Banker } from "./entity/Banker"
import { Transactions } from "./entity/Transaction"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User,Employee,Client,Banker,Transactions],
    migrations: [],
    subscribers: [],
})
