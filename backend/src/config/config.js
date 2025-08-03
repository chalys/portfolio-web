//require("dotenv").config();
process.loadEnvFile();
module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "carlos123+",
    database: process.env.DB_DATABASE || "portfolio_db",
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 3306,
    dialect: process.env.CONNECTION || "mysql",
  },
  test: {
    username: "root",
    password: "carlos123+",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE,    
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
  },
};
