// Variables globales
let listaAmigos = [];

// Función para asignar texto a elemento
function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

// Función principal para intentos del usuario
function intentoDeUsuario() {
    let inputAmigo = document.querySelector('#amigo').value.trim();
    
    if (inputAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return limpiarCaja();
    }
    
    if (listaAmigos.includes(inputAmigo)) {
        alert('Este amigo ya está en la lista.');
        return limpiarCaja();
    }
    
    listaAmigos.push(inputAmigo);
    mostrarListaAmigos();
    limpiarCaja();
    asignarTextoElemento('#resultado', '');
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    let listaHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
    asignarTextoElemento('#listaAmigos', listaHTML);
}

// Función para elegir amigo secreto (genera índice aleatorio)
function elegirAmigoSecreto() {
    return listaAmigos.length > 0 ? Math.floor(Math.random() * listaAmigos.length) : 0;
}

// Función para sortear amigo (OCULTA LISTA Y MUESTRA SOLO GANADOR)
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear. ¡Agrega algunos primero!');
        return;
    }
    
    let indiceSecreto = elegirAmigoSecreto();
    let amigoSorteado = listaAmigos[indiceSecreto];
    
    // OCULTAR la lista de amigos completamente
    asignarTextoElemento('#listaAmigos', '');
    
    // MOSTRAR solo el ganador
    asignarTextoElemento('#resultado', `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`);
}

// Función para limpiar caja de entrada
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para condiciones iniciales
function condicionesIniciales() {
    limpiarCaja();
    document.querySelector('#amigo').focus();
}

// Función para reiniciar juego
function reiniciarJuego() {
    listaAmigos = [];
    asignarTextoElemento('#listaAmigos', '');
    asignarTextoElemento('#resultado', '');
    condicionesIniciales();
}

//  condiciones iniciales
document.addEventListener('DOMContentLoaded', function() {
    condicionesIniciales();
    
    document.querySelector('#amigo').addEventListener('keypress', function(event) {
        event.key === 'Enter' ? intentoDeUsuario() : null;
    });
});