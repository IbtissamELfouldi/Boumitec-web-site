# Boumitec - Site Web

Ce projet est un site web pour l'entreprise Boumitec, qui comprend les sections suivantes : Page d'accueil, Nos produits, À propos, Contact, et un formulaire pour prendre un rendez-vous.

## Fonctionnalités

- **Page d'accueil** : Présentation de l'entreprise.
- **Nos produits** : Liste des produits offerts par Boumitec.
- **À propos** : Informations sur l'entreprise.
- **Contact** : Formulaire de contact pour entrer en communication avec l'entreprise.
- **Formulaire de Rendez-vous** : Les utilisateurs peuvent prendre un rendez-vous en ligne, recevoir un email de confirmation, et l'entreprise est notifiée par email.

## Configuration

1. **Nodemailer** : Pour envoyer des emails de confirmation et de notification, configurez `nodemailer` avec votre adresse Gmail et un mot de passe d'application. Les informations d'authentification doivent être stockées dans des variables d'environnement.

2. **Variables d'environnement** :
   - `EMAIL_USER` : Adresse Gmail pour l'envoi des emails.
   - `EMAIL_PASS` : Mot de passe d'application généré par Gmail.
   - `ENTREPRISE_EMAIL` : Adresse email de l'entreprise pour recevoir les notifications de rendez-vous.

## Installation

1. Clonez le dépôt.
2. Installez les dépendances avec `npm install`.
3. Configurez les variables d'environnement.
4. Lancez le serveur avec `node server.js`.

## Sécurité

**Important** : Ne partagez pas vos informations sensibles (comme votre email et mot de passe d'application) sur GitHub. Utilisez des variables d'environnement pour sécuriser ces informations.

## License

Ce projet est sous licence MIT.
