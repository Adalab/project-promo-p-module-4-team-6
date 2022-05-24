// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const styles = './src/main.css';
//Importamos la base de datos:
const Database = require('better-sqlite3');
const db = Database('./src/db/cards.db', { verbose: console.log });

// Creamos el servidor

const server = express();

//importar estilos:

server.use(express.static(styles));

// Configuramos el servidor server.use(cors());

server.use(cors());
server.use(express.json({ limit: '10mb' }));

// Configurar el servidor para que trabaje con ejs:

server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 4000

const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(
    `Server listening at :https://project-module-4-team-6.herokuapp.com:${serverPort}`
  );
});
//Creamos una constante donde se guarde la tarjeta creada.

const saveCards = [];

// Escribimos el endpoint para generar la url de la tarjeta

server.post('/card', (req, res) => {
  if (
    req.body.name !== '' &&
    req.body.email !== '' &&
    req.body.job !== '' &&
    req.body.image !== '' &&
    req.body.phone !== '' &&
    req.body.linkedin !== '' &&
    req.body.github !== ''
  ) {
    //crear la tarjeta que es un objeto
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };
    //saveCards.push(newCard);

    //Insertar la tarjeta en la base de datos:

    const query = db.prepare(
      `INSERT INTO cards (palette,name,job,email,phone,linkedin,github,photo,uuid)VALUES (?,?,?,?,?,?,?,?,?)`
    );
    const card = query.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.email,
      newCard.phone,
      newCard.linkedin,
      newCard.github,
      newCard.photo,
      newCard.id
    );
    //Creamos la respuesta
    const responseSuccess = {
      success: true,
      cardURL: `https://project-module-4-team-6.herokuapp.com/card/${newCard.id}`,
    };
    //Enviamos la respuesta
    res.json(responseSuccess);
  } else {
    const responseError = {
      success: false,
      error: 'Faltan parámetros',
    };
    res.json(responseError);
  }
});

//endpoint de la tarjeta de la usuaria:

server.get('/card/:id', (req, res) => {
  // const userCard = saveCards.find((card) => card.id === req.params.id);
  const query = db.prepare('SELECT * FROM cards WHERE uuid = ?');
  const userCard = query.get(req.params.id);
  res.render('card', userCard);
});

//endpoints:
/*
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
  // Creamos la respuesta:

  const responseSuccess = {
    success: true,
    newCardURL: `http://localhost:4000/card/${newCard.id}`,
  };
  //Se envía la respuesta:
  res.json(responseSuccess);
});
*/
//servidores estáticos de React
const pathServerPublic = './src/public-react';
server.use(express.static(pathServerPublic));
//servidores estáticos de Estilos
const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));
