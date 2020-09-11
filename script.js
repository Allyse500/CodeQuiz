alert("Welcome to Code Quiz Game!");

//var timer = setTimeout(displayTime,1000);

document.getElementById("START").addEventListener("click", hideButton);
//document.getElementById("START").addEventListener("click", timer);
document.getElementById("START").addEventListener("click", questionSet1);
//MOVE TO QUESTION2
//document.getElementById("true").addEventListener("click", questionSet2);
//document.getElementById("false1").addEventListener("click", questionSet2);
//hide start button after click
function hideButton() {
    document.getElementById("START").style.display = "none";
  }

  //onclick="setTimeout(displayTime, 1000);"
//````````````````````````````````````````````````````````````````
  //Timer By Click
/*var timeEl = document.querySelector("#time");
  
var secondsLeft = 20;

function displayTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }
  
  function sendMessage() {
    timeEl.textContent = "Time's up!";
  }*/


  var timeEl = document.querySelector("#time");
  
  var secondsLeft = 20;
  
  var displayTime = function () {
       timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          
          sendMessage();
         // setTimeout(sendMessage2(),5000);
         // prompt("Save your initials");
        }

        /*if(document.querySelector("true1").value === "correct") {
          alert("Way to go!");
        }*/
      }, 1000);
    }
    
    function sendMessage() {
      timeEl.textContent = "Time's up!";
    }

    /*function sendMessage2() {
      timeEl.textContent = "Your Score";// + score;
    }*/

//End of timer by click

//``````````````````````````````````````````````````````````````
//ANSWER RESPONSES
var right = document.querySelector("#correct");
var wrong = document.querySelector("#incorrect");
//QUESTION 1 WORK-UP

var question1 = document.querySelector(".question1");
//question one should show up after button click
function questionSet1(){
    question1.style.display = "inline";
}
//Enable prompt of next question after click
document.getElementById("true1").addEventListener("click", questionSet2);
document.getElementById("false1").addEventListener("click", questionSet2);
//ANSWER TO QUESTION 1 RESPONSES

document.getElementById("true1").addEventListener("click",incorrect);

function incorrect() {
  clearInterval(timerInterval);
  timeEl.style.display = "none";
  setTimeout(function() {
    var secondsLeft = 15;
    //displayTime();
    timeEl.style.display = "inline";
},5000);
  wrong.style.display = "inline";
  question1.style.display = "none";
 // clearInterval(displayTime().timerInterval);
}

document.getElementById("false1").addEventListener("click",correct);
function correct() {
  right.style.display = "inline";
  question1.style.display = "none";
 // displayTime().clearInterval();
}
//````````````````````````````````````````````````````````````````````
//QUESTION SET 2
var question2 = document.querySelector(".question2");
//question one should show up after button click

/*function timeFunction() {
  setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
}*/

/*function questionSet2(){
  question2.style.display = "inline";
  right.style.display = "none";
  wrong.style.display = "none";
}*/

function questionSet2(){setTimeout(function(){
    question1.style.display = "none";
    question2.style.display = "inline";
    right.style.display = "none";
    wrong.style.display = "none";
}, 5000);}

//Enable prompt of next question after click
document.getElementById("true2").addEventListener("click", questionSet3);
document.getElementById("false2").addEventListener("click", questionSet3);
//ANSWER TO QUESTION 2 RESPONSES

document.getElementById("true2").addEventListener("click",correct2);

function correct2() {
  right.style.display = "inline";
  question2.style.display = "none";
}

document.getElementById("false2").addEventListener("click",incorrect2);

function incorrect2() {
  wrong.style.display = "inline";
  question2.style.display = "none";
 // clearInterval(displayTime().timerInterval);
}

//````````````````````````````````````````````````````````````````````
//QUESTION SET 3
var question3 = document.querySelector(".question3");
//Question set 3 should show up after button click

function questionSet3(){setTimeout(function(){
    question2.style.display = "none";
    question3.style.display = "inline";
    right.style.display = "none";
    wrong.style.display = "none";
}, 5000);}
//ANSWER TO QUESTION 3 RESPONSES

document.getElementById("true3").addEventListener("click",correct3);

function correct3() {
  wrong.style.display = "inline";
  question3.style.display = "none";
}

document.getElementById("false3").addEventListener("click",incorrect3);

function incorrect3() {
  right.style.display = "inline";
  question3.style.display = "none";
 // clearInterval(displayTime().timerInterval);
}

    //First Question Set
/*function questionSet1() {
    let questionOne = document.getElementById('questions').innerHTML = 
    "<p>Is Javascript the same as Java?</p>";
    questionOne.appendChild("<button>yes</button>");
    questionOne.appendChild("<button>no</button>");

  }*/

  