//Grab the elements from index.html using their ids
const loginForm = document.getElementById("loginform");
const registerForm = document.getElementById("registrationform");
const showRegisterLink = document.getElementById("showRegister");
const showLoginLink = document.getElementById("showLogin");

//when "Register here" is clicked:
showRegisterLink.addEventListener("click", function(event) {
    event.preventDefault(); // Stops the "#" link from jumping the page
    loginForm.classList.add("hidden");       // Hide login
    registerForm.classList.remove("hidden"); // Show register
});

// when "Login here" is clicked:
showLoginLink.addEventListener("click", function(event) {
    event.preventDefault();
    registerForm.classList.add("hidden");    // Hide register
    loginForm.classList.remove("hidden");    // Show login
});