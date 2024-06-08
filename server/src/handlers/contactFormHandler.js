const {sendMail} = require("../utils");

const contactFormHandler = async (req, res) => {
    const {to, subject, text} = req.body;
    const mailOptions = {to, subject, text};
    await sendMail(mailOptions, res);
}

module.exports = contactFormHandler;
