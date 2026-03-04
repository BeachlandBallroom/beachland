import express from "express";
import cors from "cors";
import { db } from "./db";
import { users } from "./schema";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

app.post("/users", async (req, res) => {
  const { name } = req.body;

  const newUser = await db.insert(users).values({ name }).returning();

  res.json(newUser);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});