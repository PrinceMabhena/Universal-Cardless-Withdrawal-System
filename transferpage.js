// Add event listener to the "Transfer" button
document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission
  validateTransfer();     // Validate and store data
});

function validateTransfer() {
  const accountNumber = document.getElementById('account-number').value.trim();
  const idNumber = document.getElementById('id-number').value.trim();

  if (!accountNumber || !idNumber) {
    alert("Please enter both the Account Number and ID Number.");
    return;
  }

  if (accountNumber.length < 6 || idNumber.length < 6) {
    alert("Account Number and ID Number must be at least 6 characters.");
    return;
  }

  // ✅ Store details in localStorage
  localStorage.setItem("accountNumber", accountNumber);
  localStorage.setItem("accountHolder", idNumber); // Use ID number as placeholder name

  // ✅ Redirect to confirmation page
  window.location.href = "successfullwithdrawalpage.html";
}
