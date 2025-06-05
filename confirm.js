// Date + Object Auto Display
const confirmation = {
    accountNumber: "1111111111",
    holder: "Baphethuxolo Mnisi",
    amount: 500.0,
    time: new Date(),
    summary: function () {
      return `An amount of R${this.amount} has been transferred.\n` +
             `Account Number: ${this.accountNumber}\n` +
             `Account Holder: ${this.holder}\n` +
             `Date: ${this.time.toLocaleDateString()}\n` +
             `Time: ${this.time.toLocaleTimeString()}`;
    }
  };
  
  alert(confirmation.summary());
  
  
      // Retrieve data from localStorage
      const accountHolder = localStorage.getItem("accountHolder") || "N/A";
      const accountNumber = localStorage.getItem("accountNumber") || "N/A";
      const amount = localStorage.getItem("amount") || "N/A";
      const date = localStorage.getItem("date") || "N/A";
      const time = localStorage.getItem("time") || "N/A";
  
      // Dynamically update the page with the retrieved data
      document.getElementById("accountHolder").textContent = accountHolder;
      document.getElementById("accountNumber").textContent = accountNumber;
      document.getElementById("amount").textContent = `R${amount}`;
      document.getElementById("amountValue").textContent = `R${amount}`;
      document.getElementById("date").textContent = date;
      document.getElementById("time").textContent = time;