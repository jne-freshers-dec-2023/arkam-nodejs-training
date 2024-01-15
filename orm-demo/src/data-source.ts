import "reflect-metadata"
import { DataSource } from "typeorm"

import { User3 } from "./entity/userModel3"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User3],
    migrations: [],
    subscribers: [],
})
