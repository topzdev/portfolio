const MailerServices = require("../services/mailerServices");

const mailerServices = new MailerServices();

class MailerController {
  constructor() {
    console.log("Mailer Controller");
  }

  async sendMail(req, res) {
    try {
      const result = await mailerServices.send(req.body);

      return res.json({
        ...result,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MailerController;
