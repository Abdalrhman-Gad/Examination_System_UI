import { loadCSS } from "../utils/cssloader.js";

export function renderHome(mainContent) {
    loadCSS('./assets/styles/home.css')
  mainContent.innerHTML = `<div class="home p-5">
              <h2>ONLINE EXAMINATION SYSTEM</h2>
              <p>
                This is a Website for Online Examanition that students can
                attend exams online
              </p>
            </div>`;
}
