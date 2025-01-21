import { loadCSS } from "../utils/cssloader.js";
export function renderServices(mainContent) {
  loadCSS('./assets/styles/services.css')

  mainContent.innerHTML = `<div class="row p-5">
              <h2 class="header">SERVICES</h2>
              <p class="s-description">
                This is a Website for Online Examanition that students can
                attend exams online
              </p>
              <div class="col-4 sevices">
                <i class="bi bi-star-fill"></i
                ><span>Taking exams from students</span>
                <i class="bi bi-star-fill"></i
                ><span>making exams for stidents</span>
                <i class="bi bi-star-fill"></i
                ><span>students can give exams online</span>
              </div>
              <div class="col-6 image">
                <img src="./assets/images/image2.png" alt="" />
              </div>
            </div>`;
}
