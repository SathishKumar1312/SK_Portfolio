const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../Public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

app.get("/resume", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Public/assets/Sathishkumar_Resume.pdf")
  );
});

app.get("/works", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/works/works.html"));
});
app.get("/works/smartCircuit", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Public/works/smartCircuit/smartCircuit1.html")
  );
});
app.get("/works/signLanguageInterpreter", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/works/signLanguage.pdf"));
});

const nodemailer = require("nodemailer");

app.use(express.json()); // To handle JSON data
app.use(express.urlencoded({ extended: true }));

let temp = false;

app.post("/mailProcess", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
      user: "sathishmskdr@gmail.com",
      pass: "hrvs gujc cmvr yfne",
    },
    secure: true,
  });

  const mailData = {
    from: "sathishmskdr@gmail.com", // sender address
    to: "sathishmskcs1312@gmail.com", // list of receivers
    subject: `Mail from '${name}' via Portfolio`,
    text: `name : ${name}\nmail : ${email}\nmessage : ${message}`,
    html: `<h2><span style="color:#9670e9">Name :</span> ${name}</h2><br><h2><span style="color:#9670e9">Mail :</span> ${email}</h2><br><h2><span style="color:#9670e9">Message :</h2><br><h2>${message}</h2>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else
      console.log(
        "Message sent from '" +
          info.envelope.from +
          "' to '" +
          info.envelope.to[0] +
          "'\nMessage-ID : " +
          info.messageId
      );
  });
  temp = true;
  res.redirect("/mail");
});

app.get("/mail", (req, res) => {
  if (temp == true) {
    res.sendFile(path.join(__dirname, "../Public/mail/mail.html"));
    temp = false;
  } else {
    res.redirect("/");
  }
});

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/notFound/notFound.html"));
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
