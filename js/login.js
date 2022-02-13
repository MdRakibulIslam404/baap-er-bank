document.getElementById("login-submit").addEventListener("click", function () {
    // get email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    // get password
    const passField = document.getElementById("user-password");
    const userPass = passField.value;

    // check email and password
    if (userEmail == "example@gmail.com" && userPass == "secret") {
        window.location.href = "banking.html"
    }
});