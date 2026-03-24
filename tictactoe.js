let boxes = document.querySelectorAll(".box");
let resert = document.querySelector("#resert");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const resetGame = () =>{
    truno = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

        
 }
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText="x";
            // box.style.color = "black";
            box.classList.add("xcolor");
            turn0=false;
        }else{
            box.innerText="0";
            // box.style.color = "browne";
            box.classList.add("ocolor");
            turn0=true;
        }
        box.disabled = true;
       checkwinner();
    });
});
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerText='congratulations';
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
 
    const checkwinner = () => {
         for ( let pattern of winPatterns){
            // console.log([pattern[0]],[pattern[1]],[pattern[2]]);
            // console.log(
            //     boxes[pattern[0]].innerText,
            //     boxes[pattern[1]].innerText,
            //     boxes[pattern[2]].innerText
            // );
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;
            if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner",pos1Val);

                    showWinner();
                }

            }

            }
    };
    newGamebtn.addEventListener("click",resetGame);
    resert.addEventListener("click",resetGame);
