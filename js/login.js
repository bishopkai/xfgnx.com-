// Your script content will go here
document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.login-link');
    const loginBox = document.querySelector('.login-box');
  
    loginLink.addEventListener('click', function (event) {
      event.preventDefault();
      toggleLoginBox();
    });
  
    function toggleLoginBox() {
      loginBox.classList.toggle('open');
    }
  
    // Handle the form submission if needed
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Add your login logic here
      console.log('Login form submitted!');
    });
  });