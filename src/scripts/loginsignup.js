var loginsignup = document.getElementById("loginsignup");
var cbtn = document.getElementById("cartClose");

var shotwbutons = [
  document.getElementById("loginBtn"),
  document.getElementById("signupBtn"),
  document.getElementById("mwlimitsBtn"),
];

shotwbutons.forEach(function (btn) {
  // console.log(btn);
  btn.onclick = () => (loginsignup.style.display = "flex");
});

cbtn.onclick = function () {
  loginsignup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == loginsignup) {
    loginsignup.style.display = "none";
  }
};
