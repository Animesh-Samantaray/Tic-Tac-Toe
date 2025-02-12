let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msgCont=document.querySelector(".msgCont");
let msg=document.querySelector(".winner");
let hide=document.querySelector('.hide');
let newGame=document.querySelector(".new");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disableBox=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableBox=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerHTML="";
    })
}
const resetgame =(()=>{
    turnO=true;
    enableBox();
    msgCont.classList.add("hide");
});

 boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML="O";
            turnO= false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkSuccess();
    });
 });

 const checkSuccess=()=>{
    for( let patterns of winPatterns){
        let ans1=boxes[patterns[0]].innerHTML;
        let ans2=boxes[patterns[1]].innerHTML;
        let ans3=boxes[patterns[2]].innerHTML;
        if(ans1!="" && ans2!="" && ans3!=""){ 
        if(ans1==ans2 && ans2==ans3){
            msg.innerHTML=`${ans1} Won the match`;
            msgCont.classList.remove('hide');
            disableBox();
        }
    }
    }
    
 }

 reset.addEventListener("click",resetgame);
 newGame.addEventListener("click",resetgame);

