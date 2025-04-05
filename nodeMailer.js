import nodemailer from "nodemailer";

// config the SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "ayla4@ethereal.email",
    pass: "Pd8VePqwg6rCvVnBz5",
  },
});

// create email processor

const emailProcessor = async (templateobj) => {
  const info = await transporter.sendMail(templateobj);
  console.log(info.messageId);
};

// funtion to create the email template
export const demoTemplate = () => {
  const obj = {
    from: '"Bishes👻" <ayla4@ethereal.email>', // sender address
    to: "ayla4@ethereal.email", // list of receivers
    subject: "Hello Email  World", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  emailProcessor(obj);
};
