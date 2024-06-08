require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const { swaggerUi, swaggerDocs } = require('./swagger');
const { testRouter, bookRouter, memberRouter, borrowingRouter } = require('./routes');
app.use(express.json());

// const db = require("./database")
// db.sequelize.sync({ alter: true });


// Swagger API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api/test", testRouter);
app.use("/api/books", bookRouter);
app.use("/api/members", memberRouter);
app.use("/api/borrowing", borrowingRouter);


// not found
app.use((req, res, next) => {
  if (req.path.includes("/api/")) {
    res.status(404).send("Not found");
  } else {
    next();
  }
});

// error
app.use((req, res, next) => {
  if (req.path.includes("/api/")) {
    console.log("Error : ", req.path);
    res.status(500).send("Server error");
  } else {
    next();
  }
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(`ERROR : ${error}`);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
