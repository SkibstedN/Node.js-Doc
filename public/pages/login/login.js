

// Retrieve the form and attach a submit event listener
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  const name = "noname";
const password = "noname";
  
  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');
  
  if (usernameInput.value === name && passwordInput.value === password) {
    window.location.href = "/frontpage";
  } else {
    alert('Incorrect username or password!');
  }
});