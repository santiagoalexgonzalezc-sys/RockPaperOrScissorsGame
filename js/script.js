const battle = document.getElementById("battle")
const startBattleButton = document.getElementById("startBattleButton")
const afterBattleMessage = document.getElementById("afterBattleMessage")
const restartButton = document.getElementById("restart")
let jugador = 0
let pc = 0
let triunfos = 0
let derrotas = 0

function startGame() {
    battle.style.display = "block"
    afterBattleMessage.style.display = "none"
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra🗿🪨🗿"
    } else if(jugada == 2) {
        resultado = "Papel📃📃📃"
    } else if(jugada == 3){
        resultado = "Tijeras✂️✂️✂️"
    } else {
        resultado = "Nada"
    }
    return resultado
}  

function epicBattle() {
    while (triunfos < 3 && derrotas < 3) {
        pc = aleatorio(1,3)
        jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijeras. El Primero a ganar 3 GANA👑👑")
        alert("Tu eliges: " + eleccion(jugador))
        alert("Pc elige: " + eleccion(pc)) 

        //COMBATE!!
        if(pc == jugador) {
            alert("Empate🫥")
        } else if(jugador == 1 && pc == 3) {
            alert("GANASTE👑")
            triunfos = triunfos + 1
        } else if(jugador== 2 && pc == 1) {
            alert("GANASTE👑👑")
            triunfos = triunfos + 1
        } else if(jugador == 3 && pc == 2) {
            alert("GANASTE👑👑👑")
            triunfos = triunfos + 1
        } else {
            alert("PERDISTE 🤷‍♂️🤷‍♂️🤷‍♂️")
            derrotas = derrotas + 1
        }

        if(triunfos == 3) {
            alert("GANASTE CONTRA EL PC👑👑💻")
            alert("Ganaste " + triunfos + " Veces y Perdiste " + derrotas + " veces.")
            battle.style.display = "none"
            afterBattleMessage.style.display = "block"
        }
        if(derrotas == 3) {
            alert("PERDISTE CONTRA EL PC🤷‍♂️🤷‍♂️💻")
            alert("Ganaste " + triunfos + " Veces y Perdiste " + derrotas + " veces.")
            battle.style.display = "none"
            afterBattleMessage.style.display = "block"
        }
    }
}

function restartGame() {
    triunfos = 0
    derrotas = 0
    startGame()
}

startBattleButton.addEventListener("click", function() {
    console.log("Botón de batalla presionado");
    epicBattle();
});

restartButton.addEventListener("click", function() {
    console.log("Botón de reinicio presionado");
    restartGame();
});


startGame();

