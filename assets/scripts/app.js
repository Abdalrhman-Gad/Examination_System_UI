import { renderHome } from "./pages/home.js";
import { renderAboutus } from "./pages/abouts.js";
import { renderServices } from "./pages/services.js";
import { renderLogin } from "./pages/login.js";
import { renderAddExam } from "./pages/addExam.js";
import { renderExams } from "./pages/exams.js";
import { renderForgetPassword } from "./pages/forgetPassword.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { renderBranches } from "./pages/branches.js";
import { renderDepartments } from "./pages/departments.js";

const appContent = document.getElementById("main-content");

const routes = {
  "#/": renderLogin,
  "#/services": renderServices,
  "#/aboutus": renderAboutus,
  "#/exams": renderExams,
  "#/addExam": renderAddExam,
  "#/home": renderHome,
  "#/forgetPassword": renderForgetPassword,
  "#/branches": renderBranches,
  "#/branches/departments": renderDepartments,
  404: () => (appContent.innerHTML = `<h2>404 - page not found</h2>`),
};

function loadRoute(hash) {
  if (hash !== "") {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-page").style.display = "flex";
  } else {
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("main-page").style.display = "none";
  }

  renderHeader();
  renderSidebar(appContent); // Pass appContent to sidebar
  renderFooter();
  appContent.innerHTML = "";

  const path = hash || window.location.hash || "#/";

  if (path.startsWith("#/exams/")) {
    const examId = path.split("#/exams/")[1];
    if (examId) {
      renderExams(appContent, examId); // Updated function call
      return;
    }
  }

  if (path.startsWith("#/branches/departments")) {
    const branchId = path.split("#/branches/departments?branchId=")[1];

    if (branchId) {
      renderDepartments(appContent, branchId); // Updated function call
      return;
    }
  }
  const route = routes[path] || routes[404];
  route(appContent);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.location.hash = href; // Use the correct hash value
    loadRoute(href);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadRoute(window.location.hash);
});

window.addEventListener("hashchange", () => {
  loadRoute(window.location.hash);
});
