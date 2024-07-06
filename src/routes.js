import express from "express"
//const User = require("./models/User")
import User from "./models/User.js"
import Character from "./models/Character.js"
const router = express.Router()


// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

// Get all characters
router.get("/characters", async (req, res) => {
	const characters = await Character.find()
	res.send({characters: characters})
})

// const schema = mongoose.Schema({
// 	name: String,
// 	race: String,
//   created: Date,
//   hasMet: [String],
//   location: String,
//   alive: Boolean,
//   active: Boolean,
//   chapters: {
//     year: [{year: Number, month: Number, 
//       entries: [{author: String, date: Date, body: String}]
//   }]}
// })
// Create new character
router.post("/origin", async (req, res) => {
	console.log('character submission: ', req.body)
	const character = new Character({
		name: req.body.name,
		animal: req.body.animal,
		class: req.body.class,
		description: req.body.description,
		notes: [],
		created: Date.now(),
		hasMet: [],
		location: "origin",
		alive: true,
		active: true,
		chapters: {

		}
	})
	await character.save()
	res.send(character)
	console.log(character)
})

export default router