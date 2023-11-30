const database = require("../../database")

const users = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    city: null, // ou une valeur par défaut si nécessaire
    language: null, // ou une valeur par défaut si nécessaire
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    city: null, // ou une valeur par défaut si nécessaire
    language: null, // ou une valeur par défaut si nécessaire
  },
  {
    id: 3,
    firstname: "Bob",
    lastname: "Johnson",
    email: "bob.johnson@example.com",
    city: null, // ou une valeur par défaut si nécessaire
    language: null, // ou une valeur par défaut si nécessaire
  },
]

const getUsers = async (req, res) => {
  try {
    const users = await database.query("SELECT * FROM users")
    res.status(200).json(users)
  } catch (error) {
    console.log(users)
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

const getUserById = async (req, res) => {
  const userId = req.params.id
  try {
    const user = await database.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ])

    if (user.length === 0) {
      res.status(404).send("User not found")
    } else {
      res.status(200).json(user[0])
    }
  } catch (error) {
    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}

const postUser = (req, res) => {
  const { username, email, password } = req.body

  database
    .query(
      "INSERT INTO users(firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)",
      [username, email, password]
    )
    .then(([result]) => {
      res.status(201).send({ id: result.insertId })
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  getUsers,
  getUserById,
  postUser,
}
