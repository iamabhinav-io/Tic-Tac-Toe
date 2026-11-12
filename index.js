const playerform=document.getElementById("playerform")
const player1form=document.getElementById("player1")
const player2form=document.getElementById("player2")

const player1text=document.getElementById("player1text")
const player2text=document.getElementById("player2text")
const turnEl=document.getElementById("turn")
const winner=document.getElementById("winner");

let turn = "";
let gameStarted=false;

playerform.addEventListener("submit",(event)=>{
    event.preventDefault();
    // console.log(player1form.value)
    // console.log(player2form.value)
    player1text.innerText=player1text.innerText+player1form.value;
    player2text.innerText=player2text.innerText+player2form.value;
    gameStarted=true;
    
})


const gridArr = [];
for(let i=0;i<9;i++){
    const box=document.getElementById("box"+i);
    
    gridArr.push(box);
}

gridArr.forEach((box,index) => {
    box.addEventListener("click",()=>{
        
        if(!gameStarted || gameover || gridArr[index].innerText!=="") return; 
        
    if(turn === ""){
        turn = "x";
        turnEl.innerText = "Turn: "+turn;
    }else if(turn ==="x"){
        turn ="o";
        turnEl.innerText = "Turn: "+turn;
    }else{
        turn = "x";
    }
    
    if(turn==='x'){
        turnEl.innerText = "Turn: "+player1form.value+ "(x)";
    }else{
        turnEl.innerText = "Turn: "+player2form.value+ "(o)";

    }
    
    gridArr[index].innerText=turn;
    CheckWinner()
});
});




const winniCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
let gameover=false;

function CheckWinner(){
    let gridTexts=[];
    for(let i=0;i<9;i++){
        gridTexts.push(gridArr[i].innerText)
    }
    // console.log(gridTexts);
    winniCombinations.forEach((winnigArr)=>{
        let a=gridTexts[winnigArr[0]];
        let b=gridTexts[winnigArr[1]];
        let c=gridTexts[winnigArr[2]];

        if(a!==""&&a===b && a===c){
            console.log("Winner!");
            if(a==='x'){

                winner.innerText=winner.innerText+player1form.value+"(x)";
            }else{
                winner.innerText=winner.innerText+player2form.value+"(o)";

            }
            gameover=true;
        }
    })

}