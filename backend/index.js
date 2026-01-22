/**
 * VibeCheck API (CPE 411L)
 * Version: 1.1
 * Last updated: January 2026
 * 
 * This server:
 * - runs on your computer (localhost)
 * - listens on a port (default: 3000)
 * - responds to browser requests (endpoints) using JSON
 */
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// CORS lets your frontend page call your backend API.
app.use(cors());

// This allows Express to read JSON bodies (used for POST requests).
app.use(express.json());

// Data pools (random picks). You can customize these.
const fortunes = [
  "You will debug it in 5 minutes... after 55 minutes of panic.",
  "Your next commit will be clean and meaningful.",
  "A bug will disappear when you add one console.log().",
  "You passed the vibe check today. 😎",
];

const jokes = [
  "Why did the developer go broke? Because they used up all their cache.",
  "My code has two moods: works or why-is-this-happening.",
  "I told my program a joke... it just threw an exception.",
];

const vibeMap = {
  happy: { emoji: "😄", message: "Keep going - you're shipping greatness!" },
  tired: { emoji: "🥱", message: "Hydrate. Stretch. Then commit." },
  stressed: { emoji: "😵‍💫", message: "Breathe. One bug at a time." },
};

// Smash counter (stored in memory for now)
let smashes = 0;

/**
 * GET /api/fortune
 * Returns one random fortune from the fortunes array
 * Response format: { fortune: string }
 */
app.get("/api/fortune", (req, res) => {
  try {
    const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.json({ fortune: pick });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fortune" });
  }
});

/**
 * GET /api/joke
 * Returns one random joke from the jokes array
 * Response format: { joke: string }
 */
app.get("/api/joke", (req, res) => {
  try {
    const pick = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: pick });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

/**
 * GET /api/vibe?mood=happy|tired|stressed
 * Returns vibe response based on mood parameter
 * Response format: { mood: string, emoji: string, message: string }
 */
app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();
  const vibe = vibeMap[mood];
  
  if (!vibe) {
    return res.json({
      mood: mood || "unknown",
      emoji: "🤔",
      message: "Try mood=happy, tired, or stressed.",
    });
  }
  
  res.json({ mood, ...vibe });
});

// POST /api/smash -> increases counter and returns the updated value
app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

// GET /api/smashes -> returns current counter
app.get("/api/smashes", (req, res) => {
  res.json({ smashes });
});

/**
 * GET /api/secret?code=411L
 * Hidden endpoint that requires correct code parameter
 * Response format: { message: string }
 */
app.get("/api/secret", (req, res) => {
  const code = req.query.code;
  
  if (code === "411L") {
    return res.json({ message: "🎉 Secret unlocked: +10 luck on your next merge!" });
  }
  
  res.status(403).json({ message: "Nope 😄 Try code=411L" });
});

// Start server
app.listen(PORT, () => {
  console.log(`VibeCheck API running at http://localhost:${PORT}`);
});