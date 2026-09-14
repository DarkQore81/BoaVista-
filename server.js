import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "15mb" }));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "Boa Vista Ultra Apex Engine",
    mode: "Operational",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`[Ultra Apex] Server online op poort ${PORT}`);
});
