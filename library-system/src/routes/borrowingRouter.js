const router = require("express").Router();
const { borrowingController } = require("../controllers");

/**
 * @swagger
 * /borrowing:
 *   post:
 *     summary: Borrow a book
 *     description: Borrow a book by providing member code and book code
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 example: 'M001'
 *               bookCode:
 *                 type: string
 *                 example: 'JK-45'
 *     responses:
 *       200:
 *         description: The book has been borrowed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     MemberId:
 *                       type: integer
 *                       example: 1
 *                     BookId:
 *                       type: integer
 *                       example: 1
 *                     borrowing_date:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-08T15:50:29.000Z'
 *                     return_status:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-08T15:50:29.000Z'
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-08T15:50:29.000Z'
 *       400:
 *         description: Bad request, member or book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Member or book not found'
 *       500:
 *         description: Internal server error
 */

router.post("/", borrowingController.borrowing);

/**
 * @swagger
 * /returning:
 *   patch:
 *     summary: Return a borrowed book
 *     description: Return a borrowed book by providing member code, book code, and return date
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 example: 'M001'
 *               bookCode:
 *                 type: string
 *                 example: 'JK-45'
 *               returning_date:
 *                 type: string
 *                 format: date-time
 *                 example: '2024-06-15T15:50:29.000Z'
 *     responses:
 *       200:
 *         description: The book has been returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     MemberId:
 *                       type: integer
 *                       example: 1
 *                     BookId:
 *                       type: integer
 *                       example: 1
 *                     borrowing_date:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-08T15:50:29.000Z'
 *                     return_date:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-15T15:50:29.000Z'
 *                     return_status:
 *                       type: boolean
 *                       example: true
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-08T15:50:29.000Z'
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: '2024-06-15T15:50:29.000Z'
 *       400:
 *         description: Bad request, borrowing not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Borrowing not found'
 *       500:
 *         description: Internal server error
 */
router.patch("/", borrowingController.returning);

module.exports = router;