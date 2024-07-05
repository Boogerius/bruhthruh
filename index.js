// import mongoose from "mongoose";
import database from "./src/database.js"
//import cors from "cors";
import app from "./app.js";

// app.use(cors())

(async () => {
    try {
        await database.connect()
        console.log("Connected to BruhDB")
        //database.moo()

        app.get('/', function (req, res) {
            res.json({ msg: "Commlink Online" });
        });
         
          
        app.listen(9001, () => {
            console.log(`Example app listening on port 9001`)
        })
    } catch (error) {
        console.error("error: ", error)
        throw error
    }
})()
