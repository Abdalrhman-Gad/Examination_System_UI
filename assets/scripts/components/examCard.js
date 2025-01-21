import { loadCSS } from "../utils/cssloader.js";

export function renderExamCard(imageUrl, examName) {
  loadCSS("./assets/styles/examCard.css");
  const card = document.createElement("div");
  card.className = "exam-container card shadow";
  card.style = "width: 16rem;";
  card.innerHTML = `
        <img src="${imageUrl}" class="card-img-top"
            alt="exam Image">
        <div class="card-body text-center">
            <h5 class="card-title text-primary">${examName}</h5>
        </div>
  `;
  return card;
}
