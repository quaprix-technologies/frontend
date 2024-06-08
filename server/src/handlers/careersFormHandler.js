const {sendMail} = require("../utils");

const careersFormHandler = async (req, res) => {
    const {to, subject, text} = req.body;
    const {file} = req;
    const mailOptions = {
        to,
        subject,
        text,
        attachments: [{filename: file.originalname, path: file.path}],
    };
    await sendMail(mailOptions, res);
};

module.exports = careersFormHandler;
