const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  if(validateInputs()){
    window.location.href = 'otp.html';
  }
});
password.addEventListener('paste', (e) => {
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
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let verfied = true;
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
      "Invalid Password"
    );
    verfied = false;
  } else {
    setSuccess(password);
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


