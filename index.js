import mongoose from "mongoose";
import app from "./app.js";

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bruhdb")
        console.log("Connected to BruhDB")

        const onListening = () => {
            console.log("listening on port: 9001")
        }

        app.get('/', (req, res) => {
            res.send('Hello World!')
          })
        
        app.listen = (9001, onListening)
    } catch (error) {
        console.error("error: ", error)
        throw error
    }
})()