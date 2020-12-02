const http = require('http'); // cria um http
const express = require('express');
const { request } = require('express');
const server = http.createServer(express);
const porta = 80;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ server }); //wss é o nosso server


// 'connection é a ligação com o server'
wss.on('connection', (ws) => {
    console.log('Alguem se conectou!');
    ws.on('message', (data) => {
        data = JSON.parse(data);
        if (data['mensagem'] == undefined)
            data['mensagem'] = 'Entrou na sala.';
        wss.clients.forEach((client) => {
            client.send(JSON.stringify(data));
        })
        console.log(data);
    });

});

server.listen(porta, () => {
    console.log(`Nosso servidor está no ar!!! Está na porta ${porta}`);
});


//const app = express();
// ira executar o meu localhost, meu endereço local
// app.get('/', (request, response) => {
//     response.send('Hello World! TSI');
// });


// /TESTE É A ROTA
// app.get('/teste', (request, response) => {
//     response.send('Entramos na pagina teste');
// });

// ouvindo nossa porta 80, arrow  function é o callback