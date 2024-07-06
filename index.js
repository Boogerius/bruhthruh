// const express = require("express")
// const mongoose = require("mongoose")
// const routes = require("./routes") 
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./src/routes.js"

mongoose
	.connect("mongodb://localhost:27017/bruhdb",)
	.then(() => {
		const app = express()
		app.use(cors())
		// parse application/x-www-form-urlencoded
		app.use(express.urlencoded({ extended: true }));
		// parse application/json
		app.use(express.json());
		app.use("/api", router) // new

		app.listen(9001, () => {
			console.log("Server has started!")
		})
	})