let boxes = document.querySelectorAll(".box");
let resert = document.querySelector("#resert");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,6],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("clicke",() =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0=false;
        }else{
            box.innerText="X";
        }
    });
});