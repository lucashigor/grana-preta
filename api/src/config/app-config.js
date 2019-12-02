"use strict";
exports.__esModule = true;
require("reflect-metadata");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "grana",
    database: "grana-preta",
    entities: [
        "../model/entities/*entity.ts"
    ],
    synchronize: true
};
