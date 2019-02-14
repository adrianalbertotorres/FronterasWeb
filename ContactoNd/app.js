//Creacion por consola: npm init -y (se genera archivo Json)
//instalamos:npm install express body-parser cors nodemailer — save
//y tambien:npm install nodemon — save-dev

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/formulario', (req, res) => {
 console.log(req.body);   
 configMensaje(req.body);
 res.status(200).send();
})
app.listen(3000, () => {
 console.log('Servidor corriendo');
 
});

//arrancar ejecucion por consola: npm start