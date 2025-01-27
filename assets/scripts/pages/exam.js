export function renderExam() {
  document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const examId = params.get("examId");
    console.log(examId); // Output: the value of examId in the current URL

    const con = document.getElementById("con");

    try {
      // Fetch exam questions
      const questions = await ExamModel.fetchExamQuestions(4);

      for (const question of questions) {
        if (question.Type.trim() === "CHOOSE") {
          try {
            // Fetch choices for CHOOSE questions
            const choices = await ExamModel.fetchQuestionChoices(question.Q_Id);
            con.appendChild(
              QuestionCard.MCQCard(question.Q_Id, question.Q_Text, choices)
            );
          } catch (error) {
            console.error(
              `Failed to fetch choices for question ID ${question.Q_Id}:`,
              error
            );
          }
        } else if (question.Type.trim() === "TRUE OR FALSE") {
          con.appendChild(QuestionCard.TFCard(question.Q_Id, question.Q_Text));
        } else {
          con.appendChild(
            QuestionCard.TextCard(question.Q_Id, question.Q_Text)
          );
        }
      }
    } catch (error) {
      console.error("Failed to fetch exam questions:", error);
    }
  });
}
