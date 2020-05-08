const nodemailer = require("nodemailer");
const config = require("../configs");

class MailerServices {
  async send(message) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: config.mail,
        pass: config.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: message.email,
      to: "christianlugod05@gmail.com",
      subject: message.subject,
      text: message.text,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = MailerServices;
