const db = require("../database");
const Member = db.Member;
const Book = db.Book;

const memberList = async (req, res) => {
  try {
    const members = await Member.findAll({
      include: [
        {
          model: Book,
          attributes: ['code', 'title', 'author'],
          through: { attributes: ['return_status'] }
        },
      ],
    });
    return res.status(200).json({ "data": members });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { memberList };
