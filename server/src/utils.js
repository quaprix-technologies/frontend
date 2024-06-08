const nodemailer = require("nodemailer");

const getTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.EMAIL_SENDER_PASSWORD
        },
    });
}

const sendMail = async (mailOptions, res) => {
    try {
        const transporter = getTransporter();
        await transporter.sendMail(mailOptions);

        res.send("Email sent successfully");
    } catch (error) {
        res.status(500).send("Error sending email");
    }
}

module.exports = {sendMail}
