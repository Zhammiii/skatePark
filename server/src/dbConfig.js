import pg from "pg";
const { Pool } = pg;

const config = {
    user: "postgres",
    host: "localhost",
    database: "skatepark",
    password: "AQUI VA TU CREDENCIAL DE POSTGRES",
    port: 5432,
};
export const pool = new Pool(config);