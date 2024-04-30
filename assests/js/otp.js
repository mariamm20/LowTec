//timer handler
let timerInterval = null;

function timer(sec) {
  let seconds = sec;
  const timerElement = document.getElementById('timer');
  timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    seconds--;
    timerElement.textContent = formatTime(seconds);

    if (seconds === 0) {
      clearInterval(timerInterval);
      const resendLink = document.querySelector('.resend a');
      resendLink.addEventListener('click', resetTimer);
    }
  }

  function resetTimer() {
    seconds = 60;
    timerElement.textContent = formatTime(seconds);
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

timer(60);






// Prtototyping otp
let form = document.getElementById("form");
let btn = document.getElementById("btn");
let txt = document.getElementById("textbox");

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

btn.addEventListener('click', () => {
  let num1 = document.getElementById('no1').value;
  let num2 = document.getElementById('no2').value;
  let num3 = document.getElementById('no3').value;
  let num4 = document.getElementById('no4').value;
  let num5 = document.getElementById('no5').value;

  if (num1 === "" || num2 === "" || num3 === "" || num4 === "" || num5 === "") {
    txt.style.display = "none";
  }
  else if (num1 === "4" && num2 === "5" && num3 === "6" && num4 === "7" && num5 === "8") {
    window.location.href = 'userHome.html';
  }
  else if (num1 === '5' && num2 === '9' && num3 === '1' && num4 === '8' && num5 === '4') {
    window.location.href = 'LawyerHome.html';
  }
  else {
    txt.innerHTML = "<i class='bx bxs-error-alt'></i> &nbsp; Invalid OTP code.";
    txt.style.display = "block";
  }
});


// Handle input fields

function movetoNext(current, nextFieldID) {  
  if (current.value.length >= current.maxLength) {  
  document.getElementById(nextFieldID).focus();  
  }  
  }  

