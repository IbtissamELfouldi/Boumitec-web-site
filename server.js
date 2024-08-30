const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ibtissamfouldi10@gmail.com", // Remplacez par votre adresse Gmail
    pass: "kfdw jwyi ahxd pfgs", // Remplacez par votre mot de passe d'application
  },
});

// Route pour gérer les requêtes POST à /rdv
app.post("/rdv", (req, res) => {
  const { nom, prenom, email, date, message } = req.body;

  // Contenu de l'email de confirmation au client
  const mailOptionsClient = {
    from: "ibtissamfouldi10@gmail.com",
    to: email,
    subject: "Confirmation de Rendez-vous",
    html: `
      <p>Bonjour ${prenom},</p>
      <p>Votre rendez-vous à l'entreprise Boumitec est confirmé pour le <strong>${date}</strong>.</p>
      <p>Cordialement,</p>
      <p><strong>Boumitec</strong></p>
    `,
  };

  // Contenu de l'email à l'entreprise
  const mailOptionsEntreprise = {
    from: "ibtissamfouldi10@gmail.com",
    to: "ibtissamfouldi84@gmail.com", // Remplacez par l'email de l'entreprise
    subject: "Nouveau Rendez-vous",
    html: `
      <h2>Boumitec</h2>
      <p>Bonjour, Un nouveau rendez-vous a été pris par un client. Voici les détails :</p>
      <p><strong>Nom :</strong> ${nom} ${prenom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Date et heure du rendez-vous :</strong> ${date}</p>
      <p><strong>Message :</strong> ${message}</p>
      <p>Veuillez prendre les dispositions nécessaires pour accueillir ce client à l'heure convenue.</p>
      <br>
      <p>Cordialement,</p>
      <p>${prenom} ${nom}</p>
      <p><strong>Boumitec</strong></p>
    `,
  };

  // Envoi de l'email au client
  transporter.sendMail(mailOptionsClient, (err, info) => {
    if (err) {
      console.error("Erreur lors de l'envoi de l'email au client:", err);
    } else {
      console.log("Email envoyé au client: " + info.response);
    }
  });

  // Envoi de l'email à l'entreprise
  transporter.sendMail(mailOptionsEntreprise, (err, info) => {
    if (err) {
      console.error("Erreur lors de l'envoi de l'email à l'entreprise:", err);
    } else {
      console.log("Email envoyé à l'entreprise: " + info.response);
    }
  });

  res.send("Rendez-vous pris avec succès!");
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
