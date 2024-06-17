const {sendMail} = require("../utils");

const contactFormHandler = async (req, res) => {
    try {
        const {to, subject, text} = req.body;
        const mailOptions = {to, subject, text};
        await sendMail(mailOptions, res);
    } catch (error) {
        console.error('Error handling contact form:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = contactFormHandler;
