console.log("welocome");

 // audios playy

let music= new Audio("music.mp3")
let turnMusic = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
//function to change the turn

const changTurn = () => {
 
    return turn==X?"0":"X"
}

//function to check for a win

const checkWin = () =>{

}

// game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element  =>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener("click", ()=>{

        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            changeTurn();
            turnMusic.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

        }
    })
})
