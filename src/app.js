const express = require("express")

const app = express()
app.use(express.json()) // add this line

const userControllers = require("./controllers/userControllers")

app.get("/api/movies", userControllers.getUsers)
app.get("/api/movies/:id", userControllers.getUserById)
app.post("/api/users", userControllers.postUser)

module.exports = app
