# Utilisez une image Node.js 14.x comme image de base
FROM node:14

# Créez le répertoire de travail de l'application
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le conteneur


# Installez les dépendances de l'application
RUN npm install

# Copiez tout le reste de l'application dans le conteneur
COPY . .

# Exposez le port 3000 pour que les utilisateurs puissent y accéder
EXPOSE 3000

# Démarrez l'application
CMD [ "npm", "start" ]
