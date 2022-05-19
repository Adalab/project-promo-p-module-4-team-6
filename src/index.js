// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const styles = "./src/main.css";
//Importamos la base de datos:
const Database = require("better-sqlite3");
const db = Database("./src/db/cards", { verbose: console.log });

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

//endpoints:
server.post("/cards", (req, res) => {
  // preparamos y ejecutamos la query
  const query = db.prepare(
    `INSERT INTO cards (palette,name,job,email,phone,linkedin,github,photo,uuid)VALUES (?,?,?,?,?,?,?,?,?)`
  );
  const card = query.run(
    req.body.params.palette,
    req.body.params.name,
    req.body.params.job,
    req.body.params.email,
    req.body.params.phone,
    req.body.params.linkedin,
    req.body.params.github,
    req.body.params.photo,
    req.body.params.uuid
  );

  res.json({
    success: true,
    newCard: card,
  });
});

//servidores estáticos de React
const pathServerPublic = "./src/public-react";
server.use(express.static(pathServerPublic));
//servidores estáticos de Estilos
const pathServerPublicStyles = "./src/public-css";
server.use(express.static(pathServerPublicStyles));
