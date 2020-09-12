alert("Welcome to Code Quiz Game!");

document.getElementById("START").addEventListener("click", hideButton);
//document.getElementById("START").addEventListener("click", timer);
document.getElementById("START").addEventListener("click", questionSet1);

//hide start button after click
function hideButton() {
    document.getElementById("START").style.display = "none";
  }
  var initials = prompt.value;
//onclick="setTimeout(displayTime, 1000);"
//```````````````````````````````````````````````````````````````````````````
//SCORING POINTS
var score = 0;
var q = 20;

var pointChange = function(score,q) {
  return score + q;
}
console.log(score);
//````````````````````````````````````````````````````````````````````````````
//TIMER
  var timeEl = document.querySelector("#time");
  
  var secondsLeft = 100;
  
  var displayTime = function () {
       timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          
          sendMessage();
         
         prompt("Game Over! Your Score is " + score + ". Save your initials");
         console.log(initials);
         //sessionStorage.setItem("lastname", "Smith");
        }
      }, 1000);
    }

    function sendMessage() {
      timeEl.textContent = "Time's up!";
    }

//End of timer by click````````````````````````````````````````````````````````````````````````

//`````````````````````````````````````````````````````````````````````````````````````````````
//ANSWER RESPONSES
var right = document.querySelector("#correct");
var wrong = document.querySelector("#incorrect");
//QUESTION SET 1```````````````````````````````````````````````````````````````````````````````

var question1 = document.querySelector(".question1");
//question one should show up after button click
function questionSet1(){
  question1.style.display = "inline";
}
//Enable prompt of next question after click
document.getElementById("true1").addEventListener("click", questionSet2);
document.getElementById("false1").addEventListener("click", questionSet2);
//ANSWER TO QUESTION 1 RESPONSES

//Incorrect answer functions block``````````````````````````````````````````````
document.getElementById("true1").addEventListener("click",incorrect);

function incorrect() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  setTimeout(function() {
  displayTime(secondsLeft = secondsLeft - 20);
  },3000);
  wrong.style.display = "inline";
  question1.style.display = "none";
}

//Correct answer functions block````````````````````````````````````````````````
document.getElementById("false1").addEventListener("click",correct);

function correct() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  pointChange(score = score + q);
  right.style.display = "inline";
  question1.style.display = "none";
  console.log(score);
}
console.log(score);
//```````````````````````````````````````````````````````````````````````````````````````````````````
//QUESTION SET 2
var question2 = document.querySelector(".question2");

function questionSet2(){setTimeout(function(){
  displayTime();
  timeEl.style.display = "block";
  question1.style.display = "none";
  question2.style.display = "inline";
  right.style.display = "none";
  wrong.style.display = "none";
}, 3000);}

//Enable prompt of next question after click
document.getElementById("true2").addEventListener("click", questionSet3);
document.getElementById("false2").addEventListener("click", questionSet3);
//ANSWER TO QUESTION 2 RESPONSES

document.getElementById("true2").addEventListener("click",correct2);

function correct2() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  pointChange(score = score + q);
  right.style.display = "inline";
  question2.style.display = "none";
  console.log(score);
}
console.log(score);
document.getElementById("false2").addEventListener("click",incorrect2);

function incorrect2() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  setTimeout(function() {
  displayTime(secondsLeft = secondsLeft - 20);
  },3000);
  wrong.style.display = "inline";
  question2.style.display = "none";
}

//````````````````````````````````````````````````````````````````````
//QUESTION SET 3
var question3 = document.querySelector(".question3");

function questionSet3(){setTimeout(function(){
  displayTime();
  timeEl.style.display = "block";
  question2.style.display = "none";
  question3.style.display = "inline";
  right.style.display = "none";
  wrong.style.display = "none";
}, 3000);}

//Enable prompt of next question after click
document.getElementById("true3").addEventListener("click", questionSet4);
document.getElementById("false3").addEventListener("click", questionSet4);
//ANSWER TO QUESTION 3 RESPONSES

document.getElementById("false3").addEventListener("click",correct3);

function correct3() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  pointChange(score = score + q);
  right.style.display = "inline";
  question3.style.display = "none";
  console.log(score);
}
console.log(score);
document.getElementById("true3").addEventListener("click",incorrect3);

function incorrect3() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  setTimeout(function() {
  displayTime(secondsLeft = secondsLeft - 20);
  },3000);
  wrong.style.display = "inline";
  question3.style.display = "none";
}
//````````````````````````````````````````````````````````````````````
//QUESTION SET 4
var question4 = document.querySelector(".question4");

function questionSet4(){setTimeout(function(){
  displayTime();
  timeEl.style.display = "block";  
  question3.style.display = "none";
  question4.style.display = "inline";
  right.style.display = "none";
  wrong.style.display = "none";
}, 3000);}

//Enable prompt of next question after click
document.getElementById("true4").addEventListener("click", questionSet5);
document.getElementById("false4").addEventListener("click", questionSet5);
//ANSWER TO QUESTION 4 RESPONSES

document.getElementById("false4").addEventListener("click",correct4);

function correct4() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  pointChange(score = score + q);
  right.style.display = "inline";
  question4.style.display = "none";
  console.log(score);
}
console.log(score);
document.getElementById("true4").addEventListener("click",incorrect4);

function incorrect4() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  setTimeout(function() {
  displayTime(secondsLeft = secondsLeft - 20);
  },3000);
  wrong.style.display = "inline";
  question4.style.display = "none";
}
//````````````````````````````````````````````````````````````````````
//QUESTION SET 5
var question5 = document.querySelector(".question5");

function questionSet5(){setTimeout(function(){
  displayTime();
  timeEl.style.display = "block";  
  question4.style.display = "none";
  question5.style.display = "inline";
  right.style.display = "none";
  wrong.style.display = "none";
}, 3000);}

//Enable prompt of next question after click
//document.getElementById("true4").addEventListener("click", gameOver);

//ANSWER TO QUESTION 4 RESPONSES

//document.getElementById("true5").addEventListener("click", questionSet5);
//document.getElementById("false5").addEventListener("click", questionSet5);

function correct5() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  pointChange(score = score + q);
  right.style.display = "inline";
  question5.style.display = "none";
  setTimeout(gameOver,3000);
  console.log(score);
}
console.log(score);
document.getElementById("false5").addEventListener("click",incorrect5);

function incorrect5() {
 // document.getElementById("false4").addEventListener("click", gameOver);
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  setTimeout(function() {
  displayTime(secondsLeft = secondsLeft - 20);
  },3000);
  wrong.style.display = "inline";
  question5.style.display = "none";
  setTimeout(gameOver,3000);
}
//````````````````````````````````````````````````````````````````````````````````````
//GAME OVER FUNCTION
function gameOver (){
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  prompt("Game Over! Your Score is " + score + ". Save your initials");
  console.log(initials);
}