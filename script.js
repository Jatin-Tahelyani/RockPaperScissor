let compScore = 0;
let userScore = 0;
let choices = document.querySelectorAll(".choice")
let UserMsg = document.querySelector(".User-msg")
let CompMsg = document.querySelector(".Comp-msg")
let Finalmsg = document.querySelector(".msg")

let Random = () => {
    let Option = ["rock", "paper", "scissor"]
    let Ans = Math.floor(Math.random() * 3)
    return Option[Ans]
}

let draw = () => {
    console.log("Match Draw")
    Finalmsg.innerText = "Match are Draw"
    Finalmsg.style.backgroundColor = "black"
}

let ShowWinner = (a) => {
    if (a) {
        compScore++
        UserMsg.innerText = compScore
        console.log("You Win!")
        Finalmsg.innerText = "You Win!"
        Finalmsg.style.backgroundColor = "green"
        Finalmsg.style.Position = "relative"
        Finalmsg.style.left = "625px"

    } else {
        userScore++
        CompMsg.innerText = userScore
        console.log("You Lose.")

        Finalmsg.innerText = "You Lose."
        Finalmsg.style.backgroundColor = "red"
        Finalmsg.style.Position = "relative"
        Finalmsg.style.left = "625px"
    }
}



let PlayGame = (User) => {
    let Comp = Random()

    if (User == Comp) {
        draw()
    } else {
        let UserFinal = true

        if (User === "rock") {
            UserFinal = Comp === "paper" ? false : true
        } else if (UserFinal === "paper") {
            UserFinal = Comp === "scissor" ? false : true
        } else {
            UserFinal = Comp == "rock" ? false : true
        }
        ShowWinner(UserFinal)
    }
    console.log("User Choice = ", User)
    console.log("Comp Choice = ", Comp)

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let User = choice.getAttribute("id")
        PlayGame(User);
    })
})