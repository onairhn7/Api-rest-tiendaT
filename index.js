//const express = require('express');  esta sitaxis no es modular y la siguiente sera  equivalente

import express from 'express';
import {titan} from './routes/apiTitan.js'
import { zona } from './routes/apiZona.js';

const app = express();

//middlewares esta linea es para que pueda reconocer archivos json
app.use(express.json());


const port = 5000;

app.use('/api/titan', titan);
app.use('/api/zona', zona);


app.listen(port, ()=>{


console.log(`escuchando en el puerto ${port}`);

})