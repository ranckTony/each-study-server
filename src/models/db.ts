import mysql from "mysql2/promise";
import dbConfig from "../configs/db.config";

const pool = mysql.createPool(dbConfig);

pool.query("SELECT 1").then((data) => {
  console.log(data);
});

export { pool };
