let form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() == "") {
        alert("Username cannot be empty")
        return
    }

    alert("Form submitted successfully!");

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    form.username.value = "";
    form.password.value = "";
})