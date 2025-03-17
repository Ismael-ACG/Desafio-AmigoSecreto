// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    let nuevoAmigo = document.getElementById("amigo");
    let nombreAmigo = nuevoAmigo.value;

    if (nombreAmigo === 0) {
        alert("Por favor, inserte un nombre");
        return
    }
    amigos.push(nombreAmigo);
    nuevoAmigo.value = "";
    nuevoAmigo.focus();
    enlistar();

}

function enlistar(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let orden = document.createElement("li");
        orden.textContent = amigos[i];
        listaAmigos.appendChild(orden);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para sortear");
        return
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
} 
