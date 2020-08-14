alert("Welcome to Code Quiz Game!");

document.getElementById("START").addEventListener("click", hideButton);
document.getElementById("START").addEventListener("click", displayTime);
document.getElementById("START").addEventListener("click", questionSet1);


//hide start button after click
function hideButton() {
    document.getElementById("START").style.display = "none";
  }

  //Timer By Click
  var timeEl = document.querySelector("#time");
  
  var secondsLeft = 180;

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
  }
    //End of Timer By Click

    //First Question Set
function questionSet1() {
    let questionOne = document.getElementById('questions').innerHTML = 
    "<p>Is Javascript the same as Java?</p>"
  }
