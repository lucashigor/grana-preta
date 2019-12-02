import "./node_modules/reflect-metadata";
import {ConnectionOptions} from "./node_modules/typeorm";
 
 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "grana",
    database: "grana-preta",
    entities: [
         "../model/entities/*entity.ts"
    ],
    synchronize: true,
}