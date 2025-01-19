export class FirstPageView {
  static renderFirstPage() {
    const html = document.createElement("div");
    html.className = "first-page-container";
    html.innerHTML = `
        <div class="container d-flex justify-content-center align-items-center h-100">
            <div class="text-center">
                <div class="text-light fs-2 fw-bold mb-4">
                    Are you a Student or Teacher?
                </div>
                <div class="d-flex gap-4 justify-content-center">
                    <button type="manager-btn" class="btn btn-light rounded-1">Training Manager</button>
                    <button type="teacher-btn" class="btn btn-light rounded-1">Teacher</button>
                    <button id="student-btn" type="button" class="btn btn-light rounded-1">Student</button>
                </div>
            </div>
        </div>
      `;
    return html;
  }
}
