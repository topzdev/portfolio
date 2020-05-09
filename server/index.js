const express = require("express");
const bodyParser = require("body-parser");
const mailerRoute = require("./routes/mailerRoute");
const config = require("./configs/index");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => res.send("Hello, World"));

app.use("/api/mail", mailerRoute);

const PORT = 5000 || config.port;

app.listen(PORT, () => console.log("Server Established"));
