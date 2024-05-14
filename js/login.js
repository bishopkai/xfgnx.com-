<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD97v0JOhU8Vfdaz4EoxA-OMTErUPS9w2k",
    authDomain: "project-seven-c31f2.firebaseapp.com",
    databaseURL: "https://project-seven-c31f2-default-rtdb.firebaseio.com",
    projectId: "project-seven-c31f2",
    storageBucket: "project-seven-c31f2.appspot.com",
    messagingSenderId: "257034431192",
    appId: "1:257034431192:web:04384bd1e17a619940c5ad",
    measurementId: "G-3N15F5HGYP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

//login.js content
document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.login-link');
    const loginBox = document.querySelector('.login-box');
    const userBanner = document.querySelector('.user-banner');

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
          // Hide login box
          loginBox.classList.remove('open');
          // Show user banner/mini dashboard
          userBanner.classList.add('open');
          // Update user details in the banner if needed
          // e.g., userBanner.querySelector('.display-name').innerText = user.displayName;
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
