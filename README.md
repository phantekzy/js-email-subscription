Email Subscription Landing Page

A simple email subscription landing page built with HTML, CSS, and JavaScript.

Features:
- Full-screen hero section with background image and gradient overlay
- Responsive subscription form with email input
- Success message shown after form submission
- Connects to Google Apps Script backend (Google Sheets) for storing emails

Project Structure:
- index.html : Main landing page markup
- style.css : Styling for layout, typography, and form
- script.js : Handles form submission and feedback
- img/ : Folder for background and button icon images

Setup:
1. Clone this repository:
   git clone https://github.com/phantekzy/js-email-subscription.git
2. Open index.html in your browser to view the page.
3. To connect with Google Sheets:
   - Create a Google Apps Script to handle form submissions
   - Publish it as a web app
   - Replace YOUR_SCRIPT_URL_HERE in script.js with your real URL
   - Keep your real URL private (do not push it to GitHub)

Notes:
- By default, the project uses a placeholder script URL.
- For production, secure your Google Script endpoint to avoid spam submissions.

License:
This project is open-source and free to use.
