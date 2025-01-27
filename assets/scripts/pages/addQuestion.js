import { loadCSS } from "../utils/cssloader.js";

export function renderAddQustion(mainContent) {
    loadCSS('./assets/styles/question.css')
  mainContent.innerHTML = `<div class="container">
        <h1>Add Question</h1>
        <form id="questionForm">
            <div class="form-group">
                <label for="questionType">Question Type</label>
                <select id="questionType" name="questionType">
                    <option value="mcq">Multiple Choice (MCQ)</option>
                    <option value="trueFalse" selected>True/False</option>
                    <option value="text">Text with Answer</option>
                </select>
            </div>

            <div class="form-group">
                <label for="questionText">Question Text</label>
                <textarea id="questionText" name="questionText" rows="4" required></textarea>
            </div>

            <!-- MCQ Fields -->
            <div id="mcqFields" class="question-type-fields">
                <div class="form-group">
                    <label for="option1">Option 1</label>
                    <input type="text" id="option1" name="option1">
                </div>
                <div class="form-group">
                    <label for="option2">Option 2</label>
                    <input type="text" id="option2" name="option2">
                </div>
                <div class="form-group">
                    <label for="option3">Option 3</label>
                    <input type="text" id="option3" name="option3">
                </div>
                <div class="form-group">
                    <label for="option4">Option 4</label>
                    <input type="text" id="option4" name="option4">
                </div>
                <div class="form-group">
                    <label for="correctAnswer">Correct Answer</label>
                    <select multiple id="correctAnswer" name="correctAnswer">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                    </select>
                </div>
            </div>

            <!-- True/False Fields -->
            <div id="trueFalseFields" class="question-type-fields" style="display: none;">
                <div class="form-group">
                    <label for="trueFalseAnswer">Correct Answer</label>
                    <select id="trueFalseAnswer" name="trueFalseAnswer">
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            </div>

            <!-- Text with Answer Fields -->
            <div id="textFields" class="question-type-fields" style="display: none;">
                <div class="form-group">
                    <label for="textAnswer">Correct Answer</label>
                    <textarea id="textAnswer" name="textAnswer" rows="4"></textarea>
                </div>
            </div>

            <button type="submit">Add Question</button>
        </form>
    </div>`;

    document.getElementById('questionType').addEventListener('change',toggleFields);

    function toggleFields() {
        const questionType = document.getElementById('questionType').value;
        const mcqFields = document.getElementById('mcqFields');
        const trueFalseFields = document.getElementById('trueFalseFields');
        const textFields = document.getElementById('textFields');
    
        mcqFields.style.display = questionType === 'mcq' ? 'block' : 'none';
        trueFalseFields.style.display = questionType === 'trueFalse' ? 'block' : 'none';
        textFields.style.display = questionType === 'text' ? 'block' : 'none';
    }
    
    document.getElementById('questionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const questionType = document.getElementById('questionType').value;
        const questionText = document.getElementById('questionText').value;
    
        let correctAnswer;
        if (questionType === 'mcq') {
            correctAnswer = document.getElementById('correctAnswer');
            [...correctAnswer.options].forEach((e)=>{
                if(e.selected){
                    console.log(e.value)
                }
            })
        } else if (questionType === 'trueFalse') {
            correctAnswer = document.getElementById('trueFalseAnswer').value;
        } else if (questionType === 'text') {
            correctAnswer = document.getElementById('textAnswer').value;
        }
    
        // Here you can handle the form submission, e.g., send data to a server
        console.log({
            questionType,
            questionText,
        });
    
        alert('Question added successfully!');
    });
}
