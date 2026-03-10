import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { db } from "./db";
import { users } from "./schema";
import { eq } from 'drizzle-orm';
import { authenticateToken } from './middleware/auth';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Адрес твоего Next.js
  credentials: true // Обязательно для работы с куками
}));
app.use(cookieParser());
app.use(express.json());

// Регистрация
app.post('/api/register', async (req, res) => {
  const { email, password, name } = req.body; 
  
  if (!name) return res.status(400).json({ error: 'Имя обязательно' });

  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    await db.insert(users).values({ 
      email, 
      password: hashedPassword, 
      name
    });
    res.status(201).json({ message: 'Пользователь создан' });
  } catch (e) {
    res.status(400).json({ error: 'Email уже занят' });
  }
});

// Логин
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.select().from(users).where(eq(users.email, email)).limit(1);

  if (!user[0] || !(await bcrypt.compare(password, user[0].password))) {
    return res.status(401).json({ error: 'Неверные данные' });
  }

  const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

  res.cookie('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  }).json({ user: { email: user[0].email } });
});

// Получение данных текущего пользователя
app.get('/api/me', authenticateToken, async (req, res) => {
  const userId = (req as any).user.userId;
  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  res.json(user[0]);
});

app.listen(4000, () => console.log('Server running on port 4000'));