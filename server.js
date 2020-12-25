const express = require("express");
const connectDB = require("./db");
var app = express();

connectDB();
console.log(process.env.USER, process.env.DB_NAME, process.env.DB_PASSWORD);
//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

//Routes
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(` Server is running on port ${PORT}`));
