#LenguajeDeProgramacion:Version 
FROM node:20.1.0
#Directorio Docker Image
WORKDIR /app
#Direcciones de package JSON
COPY package*.json ./
#Instalador del lenguaje
RUN npm install 
#Direcciones de archivos a copiar, el primero son todos los files de fuera  y el segundo el WORKDIR
COPY . .
#Puerto de comuinicacion con Docker
EXPOSE 3000
#Trigger
RUN npm run build
ENTRYPOINT ["npm", "start"]