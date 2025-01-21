import { loadCSS } from "../utils/cssloader.js";

export function renderAboutus(mainContent) {
  loadCSS("./assets/styles/aboutus.css");
  mainContent.innerHTML = `<div class="row p-5">
              <h2 class="about-us-h">About Us</h2>
              <p class="description">
                This is a Website for Online Examanition that students can
                attend exams online
              </p>
              <div class="image">
                <img src="./assets/images/image.png" alt="" />
              </div>
            </div>
     `;
}
