function selectBank(element) {
    // Remove "selected" class from all banks
    const banks = document.querySelectorAll('.bank');
    banks.forEach(bank => bank.classList.remove('selected'));

    // Add "selected" class to the clicked bank
    element.classList.add('selected');

    // Get the bank name
    const selectedBank = element.querySelector('span').innerText;

    // Alert the user and save to localStorage
    alert("You selected: " + selectedBank);
    localStorage.setItem("selectedBank", selectedBank);

    // Add voucher information dynamically
    const voucherDetails = {
      ABSA: "Voucher Limit: R1000",
      CAPITEC: "Voucher Limit: R1500",
      FNB: "Voucher Limit: R1200",
      INVESTEC: "Voucher Limit: R2000",
      NEDBANK: "Voucher Limit: R1400",
      STANDARD_BANK: "Voucher Limit: R1300",
    };
    document.getElementById("voucherInfo").innerText = `Voucher Details: ${voucherDetails[selectedBank.toUpperCase()]}`;

    // Set a cookie to save user progress
    document.cookie = `userProgress=${selectedBank}; expires=Fri, 31 Dec 2025 23:59:59 GMT`;
  }

  // Display choices dynamically using array
  const choices = ["Yes", "No", "Maybe"];
  let choiceText = "Choices Available: ";
  choices.forEach(choice => {
    choiceText += choice + " ";
  });
  document.getElementById("choiceOptions").innerText = choiceText;

  // Display today's date at the bottom for reference
  window.onload = function () {
    const currentDate = new Date();
    const footer = document.createElement("footer");
    footer.innerText = "Today's Date: " + currentDate.toDateString();
    footer.style.color = "#fff";
    document.body.appendChild(footer);

    // Retrieve and log saved cookies
    const cookies = document.cookie.split("; ");
    console.log("Saved Cookies:");
    cookies.forEach(cookie => console.log(cookie));
  };