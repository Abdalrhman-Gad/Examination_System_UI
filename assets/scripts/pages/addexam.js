export function renderAddExam(mainContent) {
  mainContent.innerHTML = `
    <form class="w-25" id="examForm">
          <!-- exam name -->
          <div class="mb-3">
              <input type="text" class="form-control" id="exam-name" placeholder="Exam Name">
              <small class="text-danger d-none" id="examNameError">Please enter a valid exam name.</small>
          </div>
          <!-- start datetime -->
          <div class="mb-3">
              <input type="datetime-local" class="form-control" id="start-datetime" placeholder="Start Datetime">
              <small class="text-danger d-none" id="startDatetimeError">Please select a valid start datetime.</small>
          </div>
          <!-- end datetime -->
          <div class="mb-3">
              <input type="datetime-local" class="form-control" id="end-datetime" placeholder="End Datetime">
              <small class="text-danger d-none" id="endDatetimeError">End datetime must be after the start datetime.</small>
          </div>
          <!-- allowance -->
          <div class="mb-3">
              <input type="text" class="form-control" id="allowance" placeholder="Allowance">
              <small class="text-danger d-none" id="allowanceError">Please enter a valid allowance.</small>
          </div>
          <!-- branch department track intake course instructor id -->
          <div class="mb-3">
              <input type="number" class="form-control" id="bdticid" placeholder="BDTICID Id">
              <small class="text-danger d-none" id="bdticidError">Please enter a valid BDTICID Id.</small>
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
      </form>
    `;

  document.getElementById("examForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    document
      .querySelectorAll(".text-danger")
      .forEach((error) => error.classList.add("d-none"));

    let isValid = true;

    // Validate Exam Name
    const examName = document.getElementById("exam-name").value.trim();
    if (!examName) {
      isValid = false;
      document.getElementById("examNameError").classList.remove("d-none");
    }

    // Validate Start Datetime
    const startDatetime = document.getElementById("start-datetime").value;
    if (!startDatetime) {
      isValid = false;
      document.getElementById("startDatetimeError").classList.remove("d-none");
    }

    // Validate End Datetime
    const endDatetime = document.getElementById("end-datetime").value;
    if (
      !endDatetime ||
      (startDatetime && new Date(endDatetime) <= new Date(startDatetime))
    ) {
      isValid = false;
      document.getElementById("endDatetimeError").classList.remove("d-none");
    }

    // Validate Allowance
    const allowance = document.getElementById("allowance").value.trim();
    if (!allowance) {
      isValid = false;
      document.getElementById("allowanceError").classList.remove("d-none");
    }

    // Validate BDTICID
    const bdticid = document.getElementById("bdticid").value.trim();
    if (!bdticid || isNaN(bdticid)) {
      isValid = false;
      document.getElementById("bdticidError").classList.remove("d-none");
    }

    // Submit if valid
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
}
