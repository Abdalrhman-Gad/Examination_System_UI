import { renderHome } from "./pages/home.js";
import { renderAboutus } from "./pages/abouts.js";
import { renderServices } from "./pages/services.js";
import { renderLogin } from "./pages/login.js";
import{renderAddExam} from './pages/addexam.js'
import { renderExams } from "./pages/exams.js";
import { renderForgetPassword } from "./pages/forgetPassword.js";
const appContent=document.getElementById('main-content');
const routes = {
  "#/": renderHome,
  "#/service": renderServices,
  "#/aboutus": renderAboutus,
  "#/exams": renderExams,
  "#/addExam": renderAddExam,
  "#/login": renderLogin,
  "#/forgetPassword": renderForgetPassword,
  404: () => (appContent.innerHTML = `<h2>404 - page not found</h2>`),
};

function loadRoute(hash) {
  appContent.innerHTML = "";
  const path = hash || window.location.hash || "#/";

  if (path.startsWith("#/products/")) {
    const examId = hash.split("#/exams/")[1];
    if (examId) {
      renderExam(productId);
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
    window.location.hash = href.replace("#", "");
    loadRoute(href);
  }
});

document.addEventListener("DOMContentLoaded", () => {
//   renderHeader();
  loadRoute(window.location.hash);
//   renderFooter();
});

window.addEventListener("hashchange", () => {
  loadRoute(window.location.hash);
});
