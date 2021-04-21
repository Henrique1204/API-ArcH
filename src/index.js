const http = require('http'); 
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

const server = http.createServer(app); 
server.listen(8000, '127.0.0.1');
console.log('Servidor escutando na porta 8000...');
