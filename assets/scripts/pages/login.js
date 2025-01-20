import { loadCSS } from "../utils/cssloader.js";

export function renderLogin(mainContent) {
  mainContent.hidden = true;

  loadCSS("./assets/styles/login.css");
  const loginPage = document.getElementById("login-page");

  loginPage.innerHTML = `
  <div class="row m-0 vh-100 vw-100 justify-content-center align-content-center">
        <div class="container w-50 h-75 rounded-2" style="background-color: #EEEE; padding: 100px;">

            <h2>LOGIN</h2>

            <br>

            <form id="login-form">
                <div class="mb-3">
                    <label for="email-input" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp">
                    <div class="text-danger mt-1" id="email-error"></div>
                </div>
                <div class="mb-3">
                    <label for="password-input" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password-input" minlength="8">
                    <div class="text-danger mt-1" id="password-error"></div>
                </div>
                <br>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

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
    // If both validations pass, log a success message (or handle form submission)
    alert("Login successful!");
    // Here you can submit the form to a server or proceed with further actions.
  });
}
