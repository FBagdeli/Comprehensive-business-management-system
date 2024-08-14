import app from "./server.js"

app
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}\n`)
})