document
  .getElementById("subscribe")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("semail").value;

    if (email) {
      alert("Thank you for subscribing, " + email + "!");
      console.log("Thank you for subscribing, " + email + "!");
      fetch("subscribe.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email: email }),
      })
        .then((response) => response.text())
        .then((result) => {
          alert(result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please fill out both fields.");
    }
  });
