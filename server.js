import express from "express";
import { demoTemplate } from "./nodeMailer.js";

const app = express();

// Middleware to receive the content in the body
app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    message: "Get Method",
  });
});

app.post("/", (req, res) => {
  try {
    console.log(req.body);
    // implement node mailer

    demoTemplate();
    res.json({
      message: "Gmail server started",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
