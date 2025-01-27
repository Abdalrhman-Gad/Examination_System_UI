import { loadCSS } from "../utils/cssloader.js";

export function renderLogin(mainContent) {
  mainContent.hidden = true;

  loadCSS("./assets/styles/login.css");
  const loginPage = document.getElementById("login-page");

  loginPage.innerHTML = `
  <div class="login-container vw-100 vh-100 p-0 m-0">
    <div class="row m-0 vh-100 vw-100 justify-content-center align-items-center">
      <div class="col-12 col-sm-8 col-md-6 col-lg-6">
        <div class="container rounded-2 p-4 p-lg-5 shadow-lg" style="background-color: #f8f9fa;">
          <h2 class="text-center mb-4">LOGIN</h2>
          <form id="login-form">
            <div class="mb-3">
              <label for="email-input" class="form-label">Email address</label>
              <input 
                type="email" 
                class="form-control" 
                id="email-input" 
                aria-describedby="emailHelp" 
                placeholder="Enter your email">
              <div class="text-danger mt-1" id="email-error"></div>
            </div>
            <div class="mb-3">
              <label for="password-input" class="form-label">Password</label>
              <input 
                type="password" 
                class="form-control" 
                id="password-input" 
                placeholder="Enter your password">
              <div class="text-danger mt-1" id="password-error"></div>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  `;

  // Add event listener for form submission
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  form.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate email
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
      return;
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 8) {
      passwordError.textContent =
        "Password must be at least 8 characters long.";
      return;
    }

    window.location.hash = "#/home";
    window.location.reload();
    // If both validations pass, log a success message (or handle form submission)
    alert("Login successful!");
  });
}
