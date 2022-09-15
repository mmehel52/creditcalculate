const selection = document.querySelector("#selection");
const mounth = document.querySelector("#mounth");
const amount = document.getElementById("amount");
const calcBtn = document.querySelector("#btn1");

let interest = 0;
let payment = 0;
let taxit = 0;

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (selection.value === "" || mounth.value === "" || amount.value === "") {
    alert("Please fill the areas");
  } else {
    if (selection.value === "house-loan") {
      interest = 0.89;
    } else if (selection.value === "consumer-loan") {
      interest = 1.19;
    } else if (selection.value === "auto-loan") {
      interest = 1.09;
    }
  }
  payment =
    (+amount.value *
      ((interest / 100) * (1 + interest / 100) ** +mounth.value)) /
    ((1 + interest / 100) ** +mounth.value - 1);

  payment = payment.toFixed(2);

  taxit = payment / +mounth.value;
  taxit = taxit.toFixed(2);

  document.getElementById("result1").style.display = "initial";
  document.getElementById("amount1").innerHTML = amount.value;
  document.getElementById("selector1").innerHTML = selection.value;
  document.getElementById("mounth1").innerHTML = mounth.value;
  document.getElementById("interest").innerHTML = interest;
  document.getElementById("total1").innerHTML = payment;
  document.getElementById("taxit1").innerHTML = taxit;
});
