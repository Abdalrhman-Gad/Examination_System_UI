import { loadCSS } from "../utils/cssloader.js";

export function renderFooter() {
  loadCSS("./assets/styles/footer.css");
  const FOOTER = document.getElementById("footer");
  FOOTER.innerHTML = `<div class="row p-0 m-0">
          <div class="col-3 p-0 m-0">
            <h3>EXAMINATION SYSTEM</h3>
            <p>This is the final exam of math 6th semester</p>
          </div>
          <div class="col-3 p-0 m-0">
            <h3>INFORMATION</h3>
            <p>FAQ</p>
            <p>CONTACT US</p>
          </div>
          <div class="col-3 p-0 m-0">
            <h3>QUICK LINKS</h3>
            <p>HOME</p>
            <p>SERVICES</p>
          </div>
          <div class="col-3 p-0 m-0">
            <h3>CONTACT US</h3>
            <p>Amr & Gad & Zezo</p>
            <p>01156505347</p>
            <p>amrkasban37@gmail.com</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
            <div class="col-6">
                COPYRIGHT 2024 Eg
            </div>
            <div class="col-6 allrights">
                ALL RIGHT RESERVED
            </div>

        </div>`;
}
