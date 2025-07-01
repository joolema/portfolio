const express = require("express");
const mongoose = require("mongoose");
const messageRouter = require("./router/messageRouter");
const projectRouter = require("./router/projectRouters");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/api/message", messageRouter);
app.use("/api/project", projectRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`listening on port ${process.env.port || 3000}`);
    });
  })
  .catch((error) => {
    console.log("db connection failed"), error.message;
  });
