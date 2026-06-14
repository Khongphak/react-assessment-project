import express from "express";
import cors from "cors";
import registerRouter from "./routes/register.js";
import leaderboardRouter from "./routes/leaderboard.js";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/register", registerRouter);
app.use("/api/leaderboard", leaderboardRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
