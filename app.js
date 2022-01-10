import express from "express";

const app = express();
const PORT = 3000;
//routs
app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
