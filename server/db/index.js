const {Pool}= require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
 
// const pool = new Pool({
//     host: process.env.PGHOST,
//     user: process.env.PGUSER,
//     database: process.env.PGDATABASE ,
//     password: process.env.PGPASSWORD,
//     port: process.env.PORT,
//     max: 20,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
//   })

 module.exports={
    query:(text,params)=>pool.query(text,params),
 }