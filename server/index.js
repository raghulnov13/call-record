import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const DATA_PATH = path.join(__dirname, "calls.json");

app.use(cors());
app.use(express.json());

// GET call logs (filter by number if query exists)
app.get("/api/calls", (req, res) => {
  const { number } = req.query;
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  const result = number ? data.filter((d) => d.phone.includes(number)) : data;
  res.json(result);
});

// POST a new call log
app.post("/api/calls", (req, res) => {
  const newCall = {
    ...req.body,
    date: new Date().toISOString(),
  };
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  data.unshift(newCall);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

// PATCH: Update log by index
app.patch('/api/calls/:index', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  const index = parseInt(req.params.index);
  data[index] = { ...data[index], ...req.body };
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.use("/",(req,res)=>{
  res.send("<h1>hi</h1>")
})

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
