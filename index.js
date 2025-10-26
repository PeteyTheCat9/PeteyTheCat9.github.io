import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎥 Wiktowice Live Server działa!");
});

app.get("/tv", (req, res) => {
  res.json({
    title: "Wiktowice TV",
    status: "online",
    stream: "https://www.youtube.com/embed/LIVE_STREAM_ID"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serwer działa na porcie ${PORT}`));
