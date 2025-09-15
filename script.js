/**
 * script.js
 * Handles subscription form submission and feedback
 * Sends form data to a published Google Apps Script endpoint (Google Sheets backend)
 */

// Replace locally with your real Google Script Web App URL.
const scriptURL = "YOUR_SCRIPT_URL_HERE";

// Cache DOM references
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

// Intercept form submission
form.addEventListener("submit", e => {
  e.preventDefault(); // Stop default page reload

  // Send form data to Google Apps Script using Fetch API
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      // Display success feedback to user
      msg.innerHTML = "Thanks for subscribing!";

      // Clear message after 2 seconds for better UX
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);

      // Reset form fields after successful submission
      form.reset();
    })
    .catch(error => {
      // Log error for debugging (not shown to user in production)
      console.error("Error!", error.message);
    });
});

