import express from "express";

const app = express();
const port = 3733;

app.get("/", (req, res) => {
  res.send(`test`);
});

app.listen(port, () => {
  `listening at http://localhost:${port}`;
});
