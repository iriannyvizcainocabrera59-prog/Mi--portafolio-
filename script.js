let princesa = document.getElementById("princesa");

let estrella = document.getElementById("estrella");

let puntos = 0;

let x = 150;

// mover princesa
document.addEventListener("keydown", function(event){

    if(event.key == "ArrowLeft"){
        x = x - 20;
    }

    if(event.key == "ArrowRight"){
        x = x + 20;
    }

    princesa.style.left = x + "px";

});

// movimiento estrella
let y = 0;

function moverEstrella(){

    y = y + 5;

    estrella.style.top = y + "px";

    // colisión
    let princesaX = x;
    let estrellaX = estrella.offsetLeft;

    if(y > 400 && estrellaX > princesaX - 50 && estrellaX < princesaX + 50){

        puntos++;

        document.getElementById("puntos").innerHTML = "Puntos: " + puntos;

        y = 0;

        estrella.style.left = Math.random() * 300 + "px";

    }

    // reiniciar estrella
    if(y > 500){

        y = 0;

        estrella.style.left = Math.random() * 300 + "px";

    }

}

setInterval(moverEstrella, 50);
