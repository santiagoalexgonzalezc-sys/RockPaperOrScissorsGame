const battle = document.getElementById("battle")
const goToBattle = document.getElementById("goToBattle")
const startBattleButton = document.getElementById("startBattleButton")
const battleChat = document.getElementById("battleChat")
const chatMessages = document.getElementById("chatMessages")
const chatForm = document.getElementById("chatForm")
const playerMessage = document.getElementById("playerMessage")
const inputError = document.getElementById("inputError")
const afterBattleMessage = document.getElementById("afterBattleMessage")
const subtitle = document.getElementById("subtitle")
const finalScore = document.getElementById("finalScore")
const restartButton = document.getElementById("restart")

const choices = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
}

let wins = 0
let losses = 0

function addMessage(message, className) {
    const bubble = document.createElement("p")
    bubble.classList.add("chatMessage", className)
    bubble.textContent = message
    chatMessages.appendChild(bubble)
    chatMessages.scrollTop = chatMessages.scrollHeight
}

function showBattle() {
    goToBattle.hidden = true
    battleChat.hidden = false
    playerMessage.focus()
}

function finishBattle() {
    const playerWon = wins === 3
    battle.hidden = true
    afterBattleMessage.hidden = false
    subtitle.textContent = playerWon ? "You won the battle!" : "The computer won the battle!"
    finalScore.textContent = `You won ${wins} round${wins === 1 ? "" : "s"} and lost ${losses} round${losses === 1 ? "" : "s"}.`
}

function playRound(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3) + 1
    const choiceLabel = choices[playerChoice]

    addMessage(`You: ${playerChoice} — ${choiceLabel}`, "playerMessageBubble")
    addMessage(`I choose ${computerChoice} — ${choices[computerChoice]}.`, "computerMessageBubble")

    if (playerChoice === computerChoice) {
        addMessage("It's a tie! No points this round.", "roundResult")
    } else if (
        (playerChoice === 1 && computerChoice === 3) ||
        (playerChoice === 2 && computerChoice === 1) ||
        (playerChoice === 3 && computerChoice === 2)
    ) {
        wins += 1
        addMessage(`You won this round! Score: ${wins}–${losses}.`, "roundResult")
    } else {
        losses += 1
        addMessage(`You lost this round. Score: ${wins}–${losses}.`, "roundResult")
    }

    if (wins === 3 || losses === 3) {
        chatForm.hidden = true
        finishBattle()
    } else {
        playerMessage.focus()
    }
}

function restartGame() {
    wins = 0
    losses = 0
    chatMessages.replaceChildren()
    inputError.textContent = ""
    chatForm.hidden = false
    battle.hidden = false
    goToBattle.hidden = false
    battleChat.hidden = true
    afterBattleMessage.hidden = true
}

startBattleButton.addEventListener("click", showBattle)

chatForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const choice = playerMessage.value.trim()

    if (!Object.hasOwn(choices, choice)) {
        inputError.textContent = "Please send 1, 2, or 3."
        playerMessage.focus()
        return
    }

    inputError.textContent = ""
    playerMessage.value = ""
    playRound(Number(choice))
})

restartButton.addEventListener("click", restartGame)
