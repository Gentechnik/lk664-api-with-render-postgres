import express from "express";

const app = express();
const port = 3733;

app.get("/", (req, res) => {
  res.send(`
  <h1>Skills API</h2>
  <ul>
      <li><a href="/skills">/skills</a> - web development skills</li>
  </ul>
      `);
});

app.get("/skills", (req, res) => {
  res.json([
    {
      idCode: "111",
      name: "Test111",
      url: "http111",
      description: "desc111",
    },
    {
      idCode: "222",
      name: "Test222",
      url: "http222",
      description: "desc222",
    },
  ]);
});
3;

app.listen(port, () => {
  `listening at http://localhost:${port}`;
});
