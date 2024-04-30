const form = document.getElementById("form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const input = document.querySelector('#password2');
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  if(validateInputs()){
    window.location.href = 'login.html';
  }
  
});
input.addEventListener('paste', (e) => {
    e.preventDefault(); 
  });

const setError = (element, message) => {
  
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = "<i class='bx bxs-error-alt'></i> " + message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};


const isValidName = (txt) => {
  const re = /^[a-zA-Z ]+$/
  return re.test(txt);
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!#%*?&]{8,}$/;
    return re.test(password);
  };

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  let verfied = true;
  if (firstnameValue === "") {
    setError(firstname, "First Name is required");
    verfied = 0;
  } else if (!isValidName(firstnameValue)) {
    setError(firstname, "Please provide a valid name");
    verfied = false;
  } else {
    setSuccess(firstname);

  }

  if (lastnameValue === "") {
    setError(lastname, "Last Name is required");
    verfied = false;
  } else if (!isValidName(lastnameValue)) {
    setError(lastname, "Please provide a valid name");
    verfied = false;
  } else {
    setSuccess(lastname);

  }

  if (emailValue === "") {
    setError(email, "Email is required");
    verfied = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
    verfied = false;
  } else {
    setSuccess(email);

  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    verfied = false;
  }  else if (!isValidPassword(passwordValue)) {
    setError(
      password,
      "Password must at contain least at eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    verfied = false;
  } else {
    setSuccess(password);

  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
    verfied = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords don't match");
    verfied = false;
  } else {
    setSuccess(password2);

  }
  return verfied;
};

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var y = document.getElementById("password2");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }


  var code = document.getElementById("password");
    
  var strengthbar = document.getElementById("meter");
  var display = document.getElementsByClassName("textbox")[0];
  
  code.addEventListener("keyup", function() {
    
    checkpassword(code.value);

  });
  
  
  function checkpassword(password) {
    var strength = 0;
    display.style.display = 'flex';
    strengthbar.style.display = 'block';
    
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    else{
      display.innerHTML = "<i class='bx bxs-error-alt'></i> Must contain at least one lowercase letter";
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    else{
      display.innerHTML = "<i class='bx bxs-error-alt'></i> Must contain at least one uppercase letter";
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    else{
      display.innerHTML = "<i class='bx bxs-error-alt'></i> Must contain at least one number";
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
  
    }
    else{
      display.innerHTML = "<i class='bx bxs-error-alt'></i> Must contain at least one special characters";
    }
  
    if (password.length < 8) {
      display.innerHTML = "<i class='bx bxs-error-alt'></i> minimum number of characters is 8";
    }
  
    switch (strength) {
      case 0:
        strengthbar.value = 0;
        break;
  
      case 1:
        strengthbar.value = 25;
        break;
  
      case 2:
        strengthbar.value = 50;
        break;
  
      case 3:
        strengthbar.value = 75;
        break;
  
      case 4:
        strengthbar.value = 100;
        display.innerHTML = "<i class='bx bx-check bx-sm' style='color:green'></i> &nbsp;Very Strong Password "
        break;
    }
  }