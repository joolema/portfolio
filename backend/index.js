const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const messageRouter = require("./router/messageRouter");
const projectRouter = require("./router/projectRouters");
const userRouter = require("./router/userRouter");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/message", messageRouter);
app.use("/api/project", projectRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`listening on port ${process.env.port || 3000}`);
    });
  })
  .catch((error) => {
    console.log("db connection failed", error.message);
  });

app.get("/", (req, res) => {
  res.status(200).json("server run successfully");
});
