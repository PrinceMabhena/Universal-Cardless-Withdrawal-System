const loggedInUser = localStorage.getItem('signedUpUsername');

function User(name, surname, email, cellphone, password) {
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.cellphone = cellphone;
  this.password = password;
}

const fields = [
  "name",
  "surname",
  "email",
  "cellphone",
  "password",
  "confirm-password",
];

// General field validation
function validateAllFields() {
  let allValid = true;

  for (let i = 0; i < fields.length; i++) {
    const fieldId = fields[i];
    const field = document.getElementById(fieldId);
    const value = field.value.trim();

    if (value === "") {
      field.style.backgroundColor = "lightyellow";
      alert(`Please enter your ${fieldId.replace("-", " ")}.`);
      allValid = false;
      break; // Stop at first invalid field
    } else {
      field.style.backgroundColor = "";
    }

    // Special validation for confirm-password
    if (fieldId === "confirm-password") {
      const password = document.getElementById("password").value;
      if (value !== password) {
        field.style.backgroundColor = "lightyellow";
        alert("Passwords do not match.");
        allValid = false;
        break;
      }
    }
  }

  return allValid;
}

function submitForm(event) {
  event.preventDefault();

  //try catch method to handle errors
  try {
    const allFieldsValid = validateAllFields();

    if (!allFieldsValid) {
      throw new Error("Validation failed. Please correct the highlighted fields.");
    }

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const cellphone = document.getElementById("cellphone").value;
    const password = document.getElementById("password").value;

    const fullName = `${name} ${surname}`;
    const firstName = fullName.split(" ")[0];
    console.log(`First Name: ${firstName}`);

    const newUser = new User(name, surname, email, cellphone, password);
    localStorage.setItem("user", JSON.stringify(newUser));

    alert(`${firstName}, your account has been created successfully! Redirecting to login page...`);
    window.location.href = "login.html";
  } catch (error) {
    console.error("Form submission error:", error.message);
    alert(error.message);
  }
}

// Add event listener to the submit button
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
  submitForm(event); // Call the submitForm function on button click
});

// Display basic user info and score
let score = 0;
const userName = "New User";
console.log(`User: ${userName}, Score: ${score}`);
document.getElementById("userInfoDisplay").innerText = `Welcome: ${userName}, Initial Score: ${score}`;
