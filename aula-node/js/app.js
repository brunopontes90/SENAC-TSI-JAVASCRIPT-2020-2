let ws;
let username;
const btnEnviar = document.getElementById('btnEnviar');
const txtMessage = document.getElementById('mensagem');
const cntMensagem = document.getElementById('message-container');


function init() {
    ws = new WebSocket('ws://localhost');
    ws.onopen = () => {
        console.log('Conexão aberta!');
        username = prompt("Qual é seu nick?");
        ws.send(JSON.stringify({ 'username': username }));
    }
    ws.onmessage = ({ data }) => mostraMensagem(data);
    ws.close = () => ws = null;
}

function mostraMensagem(data) {
    data = JSON.parse(data);
    //Criando a estrutura HTML
    let row = document.createElement('div');
    row.classList.add('row');

    let user = document.createElement('div');
    user.classList.add('col-2');
    user.textContent = data['username'];

    let msg = document.createElement('div');
    msg.classList.add('col-10');
    msg.textContent = data['mensagem'];

    row.appendChild(user);
    row.appendChild(msg)

    cntMensagem.appendChild(row);
}

btnEnviar.onclick = () => {
    if (!ws) {
        mostraMensagem({ "mensagem": "Sem conexão com o servidor" });
        return;
    }
    let data = { 'mensagem': txtMessage.value, 'username': username };
    ws.send(JSON.stringify(data));
};

init();