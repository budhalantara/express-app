import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hello from express-app",
  });
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
