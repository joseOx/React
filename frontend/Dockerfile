from node:18-alpine

WORKDIR /app

#copiamos los archivos package.json y package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# copiamos el resto del codigo
COPY . .

#Exponemos el puerto de Vite/CRA
EXPOSE 5173

CMD ["npm","run","dev","--host"]

