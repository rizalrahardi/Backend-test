const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: A welcome message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Welcome to my API
 */
router.get("/", (req, res) => {
  res.send("Welcome to my API");
});

module.exports = router;
