import pg from "pg";
const { Pool } = pg;

const config = {
    user: "postgres",
    host: "localhost",
    database: "skatepark",
    password: "2088",
    port: 5432,
};
export const pool = new Pool(config);