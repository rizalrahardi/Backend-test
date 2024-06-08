const db = require('../database');
const Borrowing = db.Borrowing;
const Book = db.Book;
const Member = db.Member;

const borrowing = async (req, res) => {
  try {
    const { memberCode, bookCode } = req.body;

    const member = await Member.findOne({ where: { code: memberCode }, include: [Book] });
    const book = await Book.findOne({ where: { code: bookCode } });

    if (!member || !book) {
      return res.status(404).json({ 'error': 'Member or book not found' });
    }

    if (member.penalty_status) {
      const penaltyStartDate = new Date(member.penalty_start_date);
      const now = new Date();
      const timeDiff = now - penaltyStartDate;
      const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      const remainingDays = 3 - dayDiff;

      if (remainingDays > 0) {
        return res.status(400).json({
          'error': 'Member is under penalty',
          'remaining_penalty_days': remainingDays
        });
      } else {
        member.penalty_status = false;
        member.penalty_start_date = null;
        await member.save();
      }
    }

    if (member.Books.length >= 2) {
      return res.status(400).json({ 'error': 'Member has borrowed 2 books' });
    }

    if (book.stock <= 0) {
      return res.status(400).json({ 'error': 'Book is out of stock' });
    }

    const borrowing = await Borrowing.create({
      MemberId: member.id,
      BookId: book.id,
      borrowing_date: new Date(),
      return_status: false
    });

    book.stock -= 1;
    await book.save();

    return res.status(200).json({ 'data': borrowing });

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const returning = async (req, res) => {
  try {
    const { memberCode, bookCode, returning_date } = req.body;
    const member = await Member.findOne({ where: { code: memberCode } });
    const book = await Book.findOne({ where: { code: bookCode } });
    const borrowing = await Borrowing.findOne({
      where: {
        MemberId: member.id,
        BookId: book.id,
        return_status: false
      }
    });
    if (!borrowing) {
      return res.status(404).json({ 'error': 'Borrowing not found' });
    }

    borrowing.return_date = returning_date;
    borrowing.return_status = true;
    await borrowing.save();

    book.stock += 1;
    await book.save();

    const borrowingDate = new Date(borrowing.borrowing_date);
    const returnDate = new Date(borrowing.return_date);
    const timeDiff = returnDate - borrowingDate;
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    let response = { 'data': borrowing };

    if (dayDiff > 7) {
      member.penalty_status = true;
      member.penalty_start_date = new Date();
      await member.save();
      response.message = 'Member has been penalized for late return';
    }

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { borrowing, returning };
