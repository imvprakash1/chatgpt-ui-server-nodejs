import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_APP_PASS,
  },
});

const sendEMail = (mailObj) => {
  const mailContent = {
    from: process.env.NODEMAILER_EMAIL,
    to: mailObj.to,
    subject: mailObj.subject,
    text: mailObj.text,
  };
  transport.sendMail(mailContent, (error, data) => {
    if (error) {
      throw new Error(error.message);
    } else {
      return true;
    }
  });
};

export default sendEMail;
