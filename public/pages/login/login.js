const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = "noname";
  const password = "noname";
  
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  
  if (usernameInput.value === name && passwordInput.value === password) {
    setTimeout(() => {
      window.location.href = "/frontpage";
    }, 2500)
  } else {
    alert("Incorrect username or password!");
  }
});





 
  