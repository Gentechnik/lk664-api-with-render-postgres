import { addSkill } from "../src/handler.js";

const _skill = {
  idCode: "888",
  name: "nnn",
  url: "uuu",
  description: "ddd",
};

const skill = await addSkill(_skill);
