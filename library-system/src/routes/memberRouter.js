const router = require("express").Router();
const { memberController } = require("../controllers");


/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Retrieve a list of members and their borrowed books
 *     description: Retrieve a list of all members in the library along with the books they have borrowed
 *     responses:
 *       200:
 *         description: A list of members and their borrowed books
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
 *                         example: 'M001'
 *                       name:
 *                         type: string
 *                         example: 'Angga'
 *                       penalty_status:
 *                         type: boolean
 *                         example: true
 *                       penalty_start_date:
 *                         type: string
 *                         format: date-time
 *                         example: '2024-06-08T15:50:29.000Z'
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: '2024-06-08T15:50:29.000Z'
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: '2024-06-08T15:50:29.000Z'
 *                       Books:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             code:
 *                               type: string
 *                               example: 'JK-45'
 *                             title:
 *                               type: string
 *                               example: 'Harry Potter'
 *                             author:
 *                               type: string
 *                               example: 'J.K Rowling'
 *                             Borrowing:
 *                               type: object
 *                               properties:
 *                                 return_status:
 *                                   type: boolean
 *                                   example: true
 *       500:
 *         description: Internal server error
 */

router.get("/", memberController.memberList);

module.exports = router;