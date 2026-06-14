import { Router, type Request, type Response } from "express";
import db from "../db.js";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const rows = db
    .prepare("SELECT id, name, gain FROM leaderboard ORDER BY gain DESC")
    .all();
  res.json(rows);
});

export default router;
