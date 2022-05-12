// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
// Creamos el servidor
const server = express();
// Configuramos el servidor server.use(cors());
server.use(express.json());
// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos

server.post("/card", (req, res) => {
  const responseSuccess = {
    success: true,
    cardURL: "https://awesome-profile-cards.herokuapp.com/card",
    // `https://awesome-profile-cards.herokuapp.com/card/${}`,
  };

  const responseError = {
    success: false,
    error: "Faltan parámetros",
  };
  res.json();
});
