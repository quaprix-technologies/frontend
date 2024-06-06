const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.post("/send-email", upload.single("file"), async (req, res) => {
  const { to, subject, text } = req.body;
  const { file } = req;
  console.log("sending email ...");
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harshitverma2103@gmail.com",
        pass: "snny evcp wtui gfnk",
      },
    });

    const mailOptions = {
      from: "harshitverma2103@gmail.com",
      to,
      subject,
      text,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully");
    console.log("Email sent!!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.get("/hello", (req, res) => {
  res.send("hello server");
});
