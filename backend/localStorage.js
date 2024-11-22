//add first half to create account button and second half to login button


window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Save the name in localStorage.
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      });
  

      //next step here


      // Retrieve the users name.
  const email = localStorage.getItem('email');

  if (email != "undefined" || email != "null") {
    document.getElementById('welcomeMessage').innerHTML = "Hello " + email + "!";
  } else
    document.getElementById('welcomeMessage').innerHTML = "Hello!";
  }
}
    