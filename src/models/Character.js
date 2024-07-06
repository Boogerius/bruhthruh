import mongoose from "mongoose"

const schema = mongoose.Schema({
	name: String,
	race: String,
  created: Date,
  decription: String,
  notes: [{Date, String}],
  hasMet: [String],
  location: String,
  alive: Boolean,
  active: Boolean,
  chapters: {
    year: [{year: Number, month: Number, 
      entries: [{author: String, date: Date, body: String}]
  }]}
})

const Character = mongoose.model("Character", schema)
export default Character