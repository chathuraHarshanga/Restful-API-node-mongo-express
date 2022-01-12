import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

//get routes
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
//routs
app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/posts", postRoutes);

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
