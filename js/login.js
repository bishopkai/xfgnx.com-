//login.js content
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
  
    // Handle the form submission
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Get user credentials
      const email = document.getElementById('username').value; // Updated ID to "username"
      const password = document.getElementById('password').value;

      // Sign in user with email and password using Firebase Authentication
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // User successfully signed in
          const user = userCredential.user;
          console.log('User signed in:', user);
          // Redirect to another page or display success message
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Sign-in error:', errorMessage);
          // Display error message to the user
          alert(errorMessage);
        });
    });
});


// Your script content will go here
//document.addEventListener('DOMContentLoaded', function () {
    //const loginLink = document.querySelector('.login-link');
    //const loginBox = document.querySelector('.login-box');
  
    //loginLink.addEventListener('click', function (event) {
      //event.preventDefault();
      //toggleLoginBox();
    //});
  
    //function toggleLoginBox() {
      //loginBox.classList.toggle('open');
    //}
  
    // Handle the form submission if needed
    //const loginForm = document.getElementById('login-form');
  
    //loginForm.addEventListener('submit', function (event) {
      //event.preventDefault();
      // Add your login logic here
      //console.log('Login form submitted!');
    //});
  //});
