const router = require('express').Router();
const { bookController } = require('../controllers');

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve a list of books
 *     description: Retrieve a list of all books in the library
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       code:
 *                         type: string
 *                         example: 'JK-45'
 *                       title:
 *                         type: string
 *                         example: 'Harry Potter'
 *                       author:
 *                         type: string
 *                         example: 'J.K Rowling'
 *                       stock:
 *                         type: integer
 *                         example: 1
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: '2024-06-08T15:50:29.000Z'
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: '2024-06-08T15:50:29.000Z'
 *       500:
 *         description: Internal server error
 */
router.get('/', bookController.bookList);

module.exports = router;
