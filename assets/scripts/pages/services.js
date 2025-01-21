import { loadCSS } from "../utils/cssloader.js";
export function renderServices(mainContent) {
  loadCSS("./assets/styles/services.css");

  mainContent.innerHTML = `<div class="row p-5 h-75">
              <h2 class="header">SERVICES</h2>
              <p class="s-description">
                This is a Website for Online Examanition that students can
                attend exams online
              </p>
             
                <div class="col-4 sevices">
                  <ul>
                    <li>
                      <span>Taking exams from students</span>
                    </li>
                    <li>
                      <span>making exams for stidents</span>
                    </li>
                    <li>
                      <span>students can give exams online</span>
                    </li>
                  </ul>
               </div> 
              <div class="col-6 image">
                <img src="./assets/images/image2.png" alt="" />
              </div>
            </div>`;
}
