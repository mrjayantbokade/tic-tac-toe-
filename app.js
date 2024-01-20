let boxes = document.querySelectorAll(".box");
let outerBox = document.querySelector(".outerBox");
let winnerMsg  = document.querySelector("#msg");
let winnerDiv = document.querySelector("#winnerId");
let newGameButton = document.querySelector("#newGameButton");
let resetButton = document.querySelector("#resetButton");


let winPattern = [
    [0, 4, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

let turnO = true;
let count = 0;

boxes.forEach((button) =>{
    
    
    button.addEventListener("click",()=>{

        count += 1;

        if(turnO === true){
            button.innerText ="O";
            turnO = false;
        }else{
            button.innerText = "X";
            turnO = true;
        }
        button.disabled = true;
        checkWinner();
    })
})


let checkWinner = ()=>{
    for(let pattern of winPattern ){
        // console.log(pattern);

        let firstValue = boxes[pattern[0]].innerText;
        let secondValue = boxes[pattern[1]].innerText;
        let thirdValue= boxes[pattern[2]].innerText;

        if(firstValue != "" && secondValue != "" && thirdValue != ""){

            if(firstValue === secondValue && secondValue === thirdValue){
                
              showWinner(firstValue);

            }else{
                if(count === 9){
                    winnerDiv.classList.remove("display");
                    outerBox.classList.add("display");
                    winnerMsg.innerText = `Draw Match`;
                }
            }
        }
    }
}








    
let showWinner =   (firstValue)=>{
    winnerDiv.classList.remove("display");
    outerBox.classList.add("display");
     winnerMsg.innerText = `Congratulations Winner is ${firstValue}`;
    }


newGameButton.addEventListener("click", ()=>{

    count = 0;
    for(button of boxes){
        button.innerText = "";
        button.disabled = false;
        outerBox.classList.remove("display");
        winnerDiv.classList.add("display");
    }
})




resetButton.addEventListener("click", ()=>{

    count = 0;
    for(button of boxes){
        button.innerText = "";
        button.disabled = false;
        outerBox.classList.remove("display");
        winnerDiv.classList.add("display");
    }
})