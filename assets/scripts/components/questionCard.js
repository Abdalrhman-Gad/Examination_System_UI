export class QuestionCard {
  static count = 1;

  static TFCard(qId, qText) {
    const TFCard = document.createElement("div");

    TFCard.className = "card my-3";

    TFCard.innerHTML = `
            <div class="card-body d-flex flex-row align-items-center justify-content-between">
                <p class="mb-0 me-3">${this.count}. ${qText}</p>
                <div class="d-flex">
                    <!-- Group -->
                    <input type="radio" class="btn-check" name="group${qId}" id="vbtn-radio1-${qId}" autocomplete="off">
                    <label class="btn btn-outline-primary me-2" for="vbtn-radio1-${qId}">True</label>
                    <input type="radio" class="btn-check" name="group${qId}" id="vbtn-radio2-${qId}" autocomplete="off">
                    <label class="btn btn-outline-primary" for="vbtn-radio2-${qId}">False</label>
                </div>
            </div>
          `;

    this.count++;
    return TFCard;
  }

  static MCQCard(qId, qText, choices) {
    const MCQCard = document.createElement("div");

    MCQCard.className = "card my-3";

    MCQCard.innerHTML = `
        <div class="card-body">
            <p class="mb-4">${this.count}. ${qText}</p>

            <!-- Horizontal Checkbox Group -->
            <div class="choices-container d-flex flex-column" id="choices-container-${qId}">
            </div>
        </div>
    `;

    const choicesContainer = MCQCard.querySelector(`#choices-container-${qId}`);

    choices.forEach((choice, index) => {
      const choiceLetter = String.fromCharCode(65 + index); // Convert index to letter (A, B, C, ...)
      const choiceElement = this.ChoiceCard(
        choice.Id,
        choiceLetter,
        choice.Choice_Text
      );
      choicesContainer.appendChild(choiceElement);
    });

    this.count++;
    return MCQCard;
  }

  static TextCard(qId, qText) {
    const TextCard = document.createElement("div");

    TextCard.className = "card my-3";

    TextCard.innerHTML = `
        <div class="card-body">
            <p class="mb-4">${this.count}. ${qText}</p>
            <!-- Rich Text Editor -->
            <div class="form-group">
                <label for="question-answer${qId}">Your Answer:</label>
                <input type="text" class="form-control" id="question-answer${qId}" maxlength="150" minlength="1">
  
                <small id="charCount${qId}" class="form-text text-muted">Character count: 0/150</small>
            </div>
        </div>
    `;

    // Append TextCard to the DOM here (you might already be doing this, ensure it's added before accessing the elements)

    // Get the input and character count elements using the dynamic IDs
    const input = TextCard.querySelector(`#question-answer${qId}`);
    const charCountDisplay = TextCard.querySelector(`#charCount${qId}`);

    // Update the character count dynamically as the user types
    input.addEventListener("input", () => {
      const currentLength = input.value.length;
      charCountDisplay.textContent = `Character count: ${currentLength}/150`;
    });

    this.count++;
    return TextCard;
  }

  static ChoiceCard(cId, cLetter, cText) {
    const choiceCard = document.createElement("div");

    choiceCard.className = "form-check d-flex align-items-center mb-3";

    choiceCard.innerHTML = `
       <input type="checkbox" class="btn-check" id="btncheck${cId}" autocomplete="off">
       <label class="btn btn-outline-primary me-2" for="btncheck${cId}">${cLetter}</label>
       <p class="mb-0">${cText}</p>
    `;

    return choiceCard;
  }
}
