import { Router } from "express";
import { authMiddleware } from "../auth/authMiddleware";

const router = Router();

router.get("/profile", authMiddleware, (req: any, res) => {
  res.json({
    userId: req.user.userId,
  });
});

export default router;