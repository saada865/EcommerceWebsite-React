const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config

dotenv.config({path:"backend/config/config.env"});

//connecting to database

connectDatabase()

// dotenv.config({path: 4000});

app.listen(4000,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})