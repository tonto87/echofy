document
  .getElementById("loginsignup")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const action = document.querySelector('button[name="action"]:focus').value;

    if (email && password) {
      fetch("loginsignup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          password: password,
          action: action,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          alert(result.message);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please fill out both fields.");
    }
  });
