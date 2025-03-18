// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
   
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya ha sido agregado');
        return;
    }

    amigos.push(nombreAmigo);

    actualizarListaAmigos();

    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para realizar el sorteo');
        return;
    }

   
    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indexAleatorio];

    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

   
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultado.appendChild(li);
}
