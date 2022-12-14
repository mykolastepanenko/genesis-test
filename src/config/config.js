import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const mailConfig = {
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
};
