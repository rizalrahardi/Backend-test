const db = require("../database")
const { Op } = require("sequelize");
const Book = db["Book"]

const bookList = async (req, res) => {
  try {
    const books = await Book.findAll({
      where: {
        stock: {
          [Op.gt]: 0
        }
      }
    })
    return res.status(200).json({ "data": books })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

module.exports = { bookList }