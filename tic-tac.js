let button=document.querySelectorAll("#box");
let reset= document.querySelector("#reset");
let playbtn=document.querySelector("#play-again");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turn0=true;
const winpatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]; 
const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

button.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("button clicked");
          if(turn0==true){
            box.innerText="X";
            box.style.color="blue";
            box.backgroundColor="yellow";
            turn0=false;
          }
          else{
            box.innerText="0";
            box.style.color="green";
            box.backgroundColor="pink";
            turn0=true;
          }
          box.disabled=true;
          checkwinpatterns();
            });
    }); 
    const disablebox=()=>{
        for(let button of box){
            button.disabled=true;
        }
    };

    const enablebox=()=>{
        for(let button of box){
            button.disabled=false;
            button.innerText="";
        }
    };
    const showwinner=(winner)=>{
        msg.innerText=`congraculations, winner is ** ${winner} **`;
        msgcontainer.classList.remove("hide");
        disablebox();
    };

    const checkwinpatterns=()=>{
        for(let pattern of winpatterns)
        {
       console.log(pattern[0], pattern[1], pattern[2]);
       //console.log(
         let pos1val = box[pattern[0]].innerText; 
         let pos2val = box[pattern[1]].innerText;
         let pos3val = box[pattern[2]].innerText;
       //);
       if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                console.log("winner is", pos1val);
                showwinner(pos1val);
                //disable.box();
                //msg.innerText = `winner is ${pos1val}`;
               // msgcontainer.style.display = "block";
            }
        }
        }
    }
playbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
let draw=()=>{
    if(pos1val != pos2val || pos2val != pos3val){
          console.log("match ndraw");
    }
}
  draw();  