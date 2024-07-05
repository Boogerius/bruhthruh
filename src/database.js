import mongoose from "mongoose"

const database = {
    connect() { mongoose.connect("mongodb://localhost:27017/bruhdb") }
}

export default database
