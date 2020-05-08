const MailerController = require("../controllers/mailerController");

const express = require("express");

const router = express.Router();

const controller = new MailerController();

router.post("/", (req, res) => {
  controller.sendMail(req, res);
});

module.exports = router;
