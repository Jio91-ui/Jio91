let balance = 1000;
let selectedColor = null;
let time = 30;

function updateBalance() {
  document.getElementById("balance").innerText = balance;
}

function placeBet(color) {
  selectedColor = color;
  alert("Bet placed on " + color);
}

function generateResult() {
  const colors = ["Red", "Green", "Violet"];
  const result = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("result").innerText = result;

  const betAmount = Number(document.getElementById("betAmount").value);

  if (selectedColor && betAmount > 0) {
    if (selectedColor === result) {
      balance += betAmount * 2;
      addHistory("WIN: " + result);
    } else {
      balance -= betAmount;
      addHistory("LOSE: " + result);
    }
  }

  updateBalance();
  selectedColor = null;
}

function addHistory(text) {
  const li = document.createElement("li");
  li.innerText = text;
  document.getElementById("history").prepend(li);
}

function deposit() {
  balance += 500;
  updateBalance();
  alert("₹500 Deposited (Demo)");
}

function withdraw() {
  if (balance >= 500) {
    balance -= 500;
    updateBalance();
    alert("₹500 Withdrawn (Demo)");
  } else {
    alert("Insufficient Balance");
  }
}

setInterval(() => {
  time--;
  document.getElementById("time").innerText = time;
  if (time === 0) {
    generateResult();
    time = 30;
  }
}, 1000);
