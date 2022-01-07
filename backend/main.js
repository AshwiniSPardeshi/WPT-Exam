const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const { readMsg, addMsg } = require("./user");

app.get("/read", async (req, res) => {
  const list = await readMsg();
  res.json(list);
});

app.post("/write", async (req, res) => {
  const msg = req.body;
  await addMsg(msg);
  res.json();
});

app.listen(4000, () => console.log("Server Started"));
