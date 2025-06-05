    // Variables for user data
    let score = 0;
    const userName = "Baphethuxolo";
    console.log(`User: ${userName}, Score: ${score}`);

    // Display user data
    document.getElementById("userScoreDisplay").innerText = `User: ${userName}, Score: ${score}`;

    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();

      // Get login form values
      const loginEmail = document.getElementById("login-email").value.trim();
      const loginPassword = document.getElementById("login-password").value;

      // Get stored user from localStorage
      const storedUserJSON = localStorage.getItem("user");
      const storedUser = storedUserJSON ? JSON.parse(storedUserJSON) : null;

      // Validate login
      if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
        // Save logged-in username to localStorage
        localStorage.setItem('loggedInUsername', storedUser.name);

        alert(`Welcome back, ${storedUser.name}!`);
        window.location.href = "postvoucherpage.html"; // Redirect on success
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });