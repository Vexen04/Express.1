const request = require("supertest")
const app = require("../src/app")

describe("GET /api/users", () => {
  it("should return a list of users", async () => {
    const response = await request(app).get("/api/users")

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  })
})

describe("GET /api/users/:id", () => {
  it("should return a user by ID", async () => {
    const response = await request(app).get("/api/users/1")

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
  })

  it("should return 404 for non-existing ID", async () => {
    const response = await request(app).get("/api/users/999")

    expect(response.status).toBe(404)
  })
})
