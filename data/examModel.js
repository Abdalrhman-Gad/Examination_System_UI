export class ExamModel {
  static async fetchExams() {}
  static async fetchExamQuestions(examId) {
    try {
      // Check if examId is provided
      if (!examId) {
        throw new Error("examId is required");
      }

      // Make a GET request to the server endpoint with examId as a query parameter
      const response = await fetch(
        `http://127.0.0.1:3000/api/exam/questions?examId=${examId}`
      );

      // Check if the response status is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Return the fetched data
      return data;
    } catch (error) {
      // Handle any errors (network issues, server errors, etc.)
      console.error("Error fetching exam questions:", error);
      throw error; // Re-throw the error for further handling if needed
    }
  }
  static async fetchQuestionChoices(questionId) {
    if (!questionId) {
      throw new Error("questionId is required");
    }

    const endpoint = `http://127.0.0.1:3000/api/question/choices?questionId=${questionId}`;

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        const errorMessage = await response.text();
      }

      const choices = await response.json();
      return choices;
    } catch (error) {
      console.error("Error fetching question choices:", error);
    }
  }
}
