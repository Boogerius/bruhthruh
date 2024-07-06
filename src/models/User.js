import mongoose from "mongoose"

const schema = mongoose.Schema({
	first: String,
	last: String,
  joined: Date,
  email: String,
  verified: Boolean,
  permissions: String,
  tiktok: {active: Boolean, name: String},
  youtube: {active: Boolean, name: String},
  characters: [String]
})

const User = mongoose.model("User", schema)
export default User