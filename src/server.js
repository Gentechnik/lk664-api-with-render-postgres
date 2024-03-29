import prisma from "./db.js";
import express from "express";

const app = express();
app.use(express.json());

const port = 3733;

app.get("/", (req, res) => {
  res.send(`
  <h1>Skills API</h2>
  <ul>
      <li><a href="/skills">/skills</a> - web development skills</li>
  </ul>
      `);
});

app.get("/skills", async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.json(skills);
});

app.get("/info", (req, res) => {
  res.send("<h3>Sorry we're currently on break</h3>");
});

app.post("/skills", async (req, res) => {
  const _skill = req.body;
  try {
    const skill = await addSkill(_skill);
    if (skill !== null) {
      res.status(201).json(skill);
    } else {
      res.status(400).json({ message: "an error occurred" });
    }
  } catch (e) {
    res.status(400).json({ message: "an error occurred" });
  }
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
