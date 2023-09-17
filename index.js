const express = require("express");
const mongoose = require("mongoose")

const app = express();
app.use(express.json());

app.use(require("./routes/drinks.route"));

mongoose
  .connect("mongodb+srv://Khalid:1234abcd@khalid.9spd7ka.mongodb.net/newProject")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3000, () => console.log("server start"))
