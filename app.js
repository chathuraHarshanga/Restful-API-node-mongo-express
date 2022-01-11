import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

//routs
app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/Post", (req, res) => {
  res.send("post page");
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { maxPoolSize: 50, wtimeoutMS: 2500, useNewUrlParser: true },
  () => {
    console.log("Connected to DB");
  }
);

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
