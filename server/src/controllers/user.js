

export const getByName = async (req, res) => {
  try {
    const name = req.params.name
    console.log(name)
  } catch (error) {
    
  }
  res.json('Test')
}