document.getElementById("submit-btn").addEventListener("click", function () {
    const email = document.getElementById("email-input");
    const emailValue = email.value;

    const pass = document.getElementById("password-input");
    const passValue = pass.value;

    if (emailValue == "mati@bank.com" && passValue == "matirbank") {
        window.location.href = "matir-bank.html";
    }
});