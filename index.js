const {connexionMongoos} = require('./src/services/mongoose');
const express = require('express');
const  mongoose = require('mongoose');
const path = require('path');
const { engine } = require('express-handlebars');
require('dotenv').config()
const { MongoClient } = require('mongodb');
const { Departement } = require('./src/models/Departements');
const { Payement } = require('./src/models/Payements');
const { Licences } = require('./src/models/Licences');
const { Contenir } = require('./src/models/Contenir');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', async (req, res) => {
    res.send("Acceuil");
  });

app.get('/mongodb', async (req, res) => {
    try {
      await connexionMongoos();
      const resultat = await Contenir.find()
      res.render('mongodb', { data: resultat });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur interne du serveur');
    }
  });

  app.post('/addCollections', async (req, res) => {
    try {
      await connexionMongoos();
      const licences = new Contenir(req.body)
      const resultat =  licences.save();
      res.render('mongodb', { data: resultat });

    } catch (error) {
    
              console.error(error);
              res.status(500).send('Erreur interne du serveur');  
    }
  });
  


  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });