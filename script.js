let form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (name === "") {
        message.textContent = "Please enter your name";
    }
    else if (email === "") {
        message.textContent = "Please enter your email";
    }
    else if (password === "") {
        message.textContent = "Please enter your password";
    }
    else if (password.length < 6) {
        message.textContent = "Password must contain at least 6 characters";
    }
    else {
        alert("Form submitted successfully");
        form.reset();
    }

});