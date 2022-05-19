// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const styles = "./src/main.css";

// Creamos el servidor
const server = express();
//importar estilos:
server.use(express.static(styles));
// Configuramos el servidor server.use(cors());
server.use(cors());
server.use(express.json({ limit: "10mb" }));
// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
// Configurar el servidor para que trabaje con ejs:
server.set("view engine", "ejs");
const saveCards = [];
// Escribimos los endpoints que queramos

server.post("/card", (req, res) => {
  if (
    req.body.name !== "" &&
    req.body.email !== "" &&
    req.body.job !== "" &&
    req.body.image !== "" &&
    req.body.phone !== "" &&
    req.body.linkedin !== "" &&
    req.body.github !== ""
  ) {
    //crear la tarjeta que es un objeto
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };
    saveCards.push(newCard);
    //creo la respuesta
    const responseSuccess = {
      success: true,
      // cardURL: "https://awesome-profile-cards.herokuapp.com/card",
      cardURL: `http://localhost:4000/card/${newCard.id}`,
    };
    //envio la respuesta
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: "Faltan parámetros",
    };
    res.json(responseError);
  }
});
server.get("/card/:id", (req, res) => {
  const userCard = saveCards.find((card) => card.id === req.params.id);
  res.render("card", userCard);
});
