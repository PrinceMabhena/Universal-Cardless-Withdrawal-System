// Fixed amount for withdrawal
const amount = "500";

// Get current date and time
const currentDate = new Date();
const date = currentDate.toLocaleDateString(); // e.g. 21/05/2025
const time = currentDate.toLocaleTimeString(); // e.g. 10:45:32 AM

// Retrieve stored values
const accountHolder = localStorage.getItem("accountHolder");
const accountNumber = localStorage.getItem("accountNumber");

// Redirect if any detail is missing
if (!accountHolder || !accountNumber) {
  alert("Account details are missing. Please return to the transfer process.");
  window.location.href = "transferpage.html";
} else {
  // Populate the confirmation page
  document.getElementById("accountHolder").textContent = accountHolder;
  document.getElementById("accountNumber").textContent = accountNumber;
  document.getElementById("amount").textContent = `R${amount}`;
  document.getElementById("amountValue").textContent = `R${amount}`;
  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
}
