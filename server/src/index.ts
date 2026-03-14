import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from "./auth/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Адрес твоего Next.js
  credentials: true // Обязательно для работы с куками
}));
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));