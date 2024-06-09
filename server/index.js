const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const careersFormHandler = require("./src/handlers/careersFormHandler");
const contactFormHandler = require("./src/handlers/contactFormHandler");
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/careers-form", upload.single("file"), careersFormHandler);

app.post("/contact-form", upload.none(), contactFormHandler);
