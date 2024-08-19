
export const login = async (req, res) => {
  try {
    const { email } = req.body

  console.log(firstName, lastName)
  res.json('Good')
  } catch (error) {
    console.log(error)
    res.json('bad')
  }
}