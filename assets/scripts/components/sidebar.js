import { loadCSS } from "../utils/cssloader.js";

export function renderSidebar(mainContent) {
  loadCSS("./assets/styles/sidebar.css");
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `
  <div class="sidebar-container w-100 vh-100">
        <div class="text-white fw-bold fs-5 pt-5 text-center">Examination System</div>
        <div class="d-flex sidebar d-flex flex-column justify-content-center 
                    align-items-center text-white h-75">
            <a id="exams-btn" href="#/exams" class="text-white fw-bold fs-5 py-3 text-center w-100">Exams</a>
            <a id="add-exam-btn" href="#/addExam" class="text-white py-3 fs-5 text-center w-100" data-link>Add Exam</a>
            <a id="setting-btn" href="#/settings" class="text-white py-3 fs-5 text-center w-100" data-link>Settings</a>
            <a id="logout-btn" href="#/" class="text-white py-3 fs-5 text-center w-100" data-link>Logout</a>
        </div>
    </div>
  `;

  document.getElementById("add-exam-btn").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "#/addExam";
    window.location.reload();
  });
}
