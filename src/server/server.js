import express from "express";
import cors from "cors";
const app = express();
const port = 9999;
app.use(cors());

app.post("/verify", (req, res) => {
  res.json({ isSubmitted: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
