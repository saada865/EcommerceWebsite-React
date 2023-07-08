const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
//config

dotenv.config({path:"backend/config/config.env"});

//connecting to database

connectDatabase()

// dotenv.config({path: 4000});

const server = app.listen(4000,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

// console.log(youtube);

//Unhandled promise rejection
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.messaege}`);
    console.log("Shutting down server sue to unhandeled promise rejection")
    server.close(()=>{
        process.exit(1);
    });
});