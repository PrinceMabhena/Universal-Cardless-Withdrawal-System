if (!bankName) {
    window.location.href = "selectbank.html"; // Replace with actual page name
  }
  
  
    // Get the bank from localStorage and display it
    const bankName = localStorage.getItem("selectedBank");
    if (bankName) {
      document.getElementById("selectedBankName").innerText = "Confirm: " + bankName;
    } else {
      document.getElementById("selectedBankName").innerText = "No bank selected";
    }