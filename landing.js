window.onload = function () {
    // Display the current date
    const currentDate = new Date();
    document.getElementById("dateDisplay").innerText = "Today’s Date: " + currentDate.toDateString();

    // Alert messages for user interaction
    alert("Welcome to the Universal Cardless Withdrawal System!");

    // Confirm if the user wants to continue
    const confirmAction = confirm("Do you want to continue?");
    if (confirmAction) {
      // Prompt for user input if they choose to continue
      const userInput = prompt("Enter your name:");
      if (userInput) {
        alert(`Hello, ${userInput}! Enjoy using the Universal Cardless Withdrawal System.`);
      }
    } else {
      alert("You chose not to continue. Feel free to explore the page when you're ready.");
    }

    // Cookies for user progress
    document.cookie = "userProgress=landingPage; expires=Fri, 31 Dec 2025 23:59:59 GMT";
    console.log("Cookies: ", document.cookie);

    // Create example object
    function Character(name, age, role) {
      this.name = name;
      this.age = age;
      this.role = role;
      this.greet = function() {
        alert(`Hello, We are ${this.name}, the ${this.role}.`);
      };
    }
    let admin = new Character("Baphethuxolo/Prince", 23, "Administrators");
    admin.greet(); // Greet when landing on the page
  };

  // Using Lucide icons
  lucide.createIcons();