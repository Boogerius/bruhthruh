import mongoose from "mongoose"

// SCHEMAS

// Kitten Schema

const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  return greeting
};

const Kitten = mongoose.model('Kitten', kittySchema);
  

  
// Database object for export
const database = {
    connect() { mongoose.connect("mongodb://localhost:27017/bruhdb") },
    models: {
      Kitten: Kitten
    }
}

export default database
