import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, message, mobile } = req.body;
console.log(name,email,message,mobile);

  // Create a transporter object
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shashwatchovatiya316@gmail.com",
      pass: "vjsfdnqmplhkgiuq",
    },
  });

  // Set up email data
  let mailOptions = {
    from: email,
    to: "shashwatchovatiya316@gmail.com",
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message} \nMobile: ${mobile}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});


// import express from "express";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";
// import cors from "cors";

// const app = express();
// const port = 3001;

// // Use CORS middleware
// app.use(cors());

// app.use(bodyParser.json());

// app.post("/send", (req, res) => {
//   const { name, email, message, mobile } = req.body;

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "shashwatchovatiya316@gmail.com",
//       pass: "vjsfdnqmplhkgiuq",
//     },
//   });

//   let mailOptions = {
//     from: email,
//     to: "shashwatchovatiya316@gmail.com",
//     subject: "New Message from Contact Form",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message} \nMobile: ${mobile}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send("Email sent: " + info.response);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at ${port}`);
// });
