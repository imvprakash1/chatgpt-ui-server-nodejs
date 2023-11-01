import express from "express";
import "dotenv/config";
import accountRouter from "./routes/account.js";

const app = express();
app.use(express.json());
app.use("/account", accountRouter);

app.get("/", (req, res) => {
  console.log("Base route");
  return res.send("Hello");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
