require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");
require("dotenv").config();
require("./db");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const adminRouter = require("./routes/admin");
const { handleNotFound } = require("./utils/helper");

const app = express();

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/user", userRouter);
app.use("/api/v1/actor", actorRouter);
app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/*", handleNotFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`the port is listening on port ${port}`);
});
