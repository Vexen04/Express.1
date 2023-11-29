const express = require("express")

const app = express()

const userControllers = require("./controllers/userControllers")

app.get("/api/movies", userControllers.getUsers)
app.get("/api/movies/:id", userControllers.getUserById)

module.exports = app
