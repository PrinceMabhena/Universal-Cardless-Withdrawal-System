    // Generate a 5-digit OTP
    function generateOtp() {
        return Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
      }
  
      // Display the OTP on the page
      const otp = generateOtp();
      document.getElementById('otp-display').textContent = `Your OTP is: ${otp}`;