
const rock = document.getElementById('rock');
const papper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const container2 = document.getElementById('container2');
const choice = document.getElementById('choice');
const circle = document.getElementsByClassName('circle');
const computerchoice = document.getElementById('computerchoice');

let yours = "";
var yourscore = 0;
var computerscore = 0;
let count=0;

const sourceofimg = [
  "./images/rock3-removebg-preview.png",
  "./images/papper3-removebg-preview.png",
  "./images/scissor3-removebg-preview.png"
];

rock.addEventListener("click", () => {
  yours = "rock";
  setTimeout(() => {
    choice.innerHTML = rock.outerHTML;
  }, 1000);
});

papper.addEventListener("click", () => {
  yours = "paper";
  setTimeout(() => {
    choice.innerHTML = papper.outerHTML;
  }, 1000);
});

scissor.addEventListener("click", () => {
  yours = "scissor";
  setTimeout(() => {
    choice.innerHTML = scissor.outerHTML;
  }, 1000);
});



function circleclick(){
    setTimeout(()=>{
    const randomindex=Math.floor(Math.random()*sourceofimg.length);
    const computers=['rock','paper','scissor'][randomindex]
    const randomimages=sourceofimg[randomindex]
  computerchoice.innerHTML=`<img src="${randomimages}">`;



  let result=''

  if(yours===computers){
      result='both choose the same';
  }else if(yours==="rock"&&computers==="scissor" ||
      yours==="paper" &&computers==="rock" ||
      yours==="scissor"&& computers==="paper"
  ){
      result="you win"
      yourscore++
  }else{
      result="you lose"
      computerscore++
  }
  const result2=document.getElementById('result')
  result2.innerText = result;
  // document.getElementById('playerscore').innerHTML="player"
  // document.getElementById('computerscore').innerHTML="computer"
  // document.getElementById('playerscore').innerHTML=yourscore;
  // document.getElementById('computerscore').innerHTML=computerscore;

//   document.getElementById('playerscore').innerHTML = "Player:<br> " + yourscore;
// document.getElementById('computerscore').innerHTML = "Computer: <br> " + computerscore;

  
document.getElementById('playerscore').innerHTML = "Player<br><span class='score'>" + yourscore + "</span>";
document.getElementById('computerscore').innerHTML = "Computer<br><span class='score'>" + computerscore + "</span>";


const final=document.createElement('div');
    final.id="final"

  if(yourscore===3 ||computerscore===3){
  
    
    document.body.appendChild(final)
    gamestop()
  }
  
  
  if(yourscore===3){
    final.innerText="Congratulations..you are the winner"
  }else if(computerscore===3){
    final.innerText="Oops! Better luck next time!"
  }else{
    final.innerText="it's a tie!"
  }

  // setTimeout(()=>{
   
  //   gamestop()
  // },1000)

  const restart=document.createElement('button')
  restart.id="restart";
  restart.innerHTML="Play again"
  final.appendChild(restart)
restart.addEventListener("click",restartGame)


  //
  function restartGame() {
    yours = "";
    yourscore = 0;
    computerscore = 0;
    document.getElementById('playerscore').innerHTML = 0;
    document.getElementById('computerscore').innerHTML = 0;
    document.getElementById('result').innerText = "";
    computerchoice.innerHTML = ` <img src="./images/rock3-removebg-preview.png" alt="">`;
    choice.innerHTML = `<img src="./images/rock3-removebg-preview.png" alt="">`
    const final = document.getElementById('final');
    if (final) final.remove();
  
    for (let a = 0; a < circle.length; a++) {
        circle[a].addEventListener("click", circleclick);
    }
  }


},1000)
}

for(let i=0;i<circle.length;i++){
    circle[i].addEventListener("click",circleclick)
}
function gamestop(){
    for (let a = 0; a < circle.length; a++) {
        circle[a].removeEventListener("click", circleclick);
      }
}








