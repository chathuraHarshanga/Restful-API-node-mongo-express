import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("post page");
});

router.get("/test", (req, res) => {
  res.send("post test");
});

export default router;
