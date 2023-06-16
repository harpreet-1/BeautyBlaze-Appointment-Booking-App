const nodemailer = require("nodemailer");
require("dotenv").config();

function generateOtp() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

async function sendOtp(name, email) {
  otp = generateOtp();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL, // Your Gmail email address
      pass: process.env.NODEMAILER_PASS, // Your Gmail password
    },
  });

  const maildetail = await transporter.sendMail({
    to: "moyer32584@anomgo.com",
    subject: "Your OTP for account verification",
    text: `Subject: Welcome to BeautyBlaze! Please Verify Your Email

    Dear ${name},

    Welcome to BeautyBlaze! We're thrilled to have you as a part of our beauty booking community. 

     Please use the following One-Time Password (OTP) to complete your email verification process:

    OTP: ${otp}

    At BeautyBlaze, we're dedicated to connecting you with top-notch beauty professionals and providing a seamless booking experience. By verifying your email, you'll have access to a wide range of beauty services and exclusive features.

    Thank you for choosing BeautyBlaze. We look forward to assisting you in finding the perfect beauty services that suit your needs.

    Best regards,
    The BeautyBlaze Team`,
  });
  console.log(maildetail);
}

module.exports = sendOtp;
