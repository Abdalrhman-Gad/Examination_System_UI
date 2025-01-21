import { renderExamCard } from "../components/examCard.js";
import { loadCSS } from "../utils/cssloader.js";

export function renderExams(mainContent) {
  loadCSS("./assets/styles/exams.css");
  const examCardsContainer = document.createElement("div");
  examCardsContainer.id = "container";
  examCardsContainer.className = "h-100 w-100 p-5";

  for (let index = 0; index < 5; index++) {
    const element = renderExamCard(
      "https://campus.epam.am/static/news/255/self-study_03375353.png",
      "gad Script"
    );
    examCardsContainer.appendChild(element);
  }
  mainContent.appendChild(examCardsContainer);
  //gad branch changed
}
