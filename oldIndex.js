// import mongoose from "mongoose";
import database from "./src/database.js"
//import cors from "cors";
import app from "./app.js";

// app.use(cors())

(async () => {
    try {
        await database.connect()
        console.log("Connected to BruhDB")

        app.get('/', function (req, res) {
            res.json({ msg: "Commlink Online" });
        });

        app.get('/kittens', async function (req, res) {
            const silence = new database.models.Kitten({ name: 'Silence' });
            console.log('visitor to /kittens'); // 'Silence'
            res.json({ kittenName: silence.speak()})
            await silence.save()
            const kittens = await database.models.Kitten.find();
            console.log(kittens);
        });
         
          
        app.listen(9001, () => {
            console.log(`Example app listening on port 9001`)
        })
    } catch (error) {
        console.error("error: ", error)
        throw error
    }
})()
