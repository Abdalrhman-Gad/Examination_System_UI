import { DepartmentModel } from "../../../data/departmentModel.js";
import { loadCSS } from "../utils/cssloader.js";

export function renderDepartments(mainContent, branchId) {
  loadCSS("./assets/styles/branches.css");

  DepartmentModel.fetchBranchDepartments(branchId)
    .then((departments) => {
      // Check if departments are found
      if (departments.length > 0) {
        mainContent.innerHTML = `
        <div class="branches-container container h-100 w-100 p-5">
          <table class="table table-bordered table-hover text-center">
            <caption>
              <h4>${departments[0].B_Name} Departments</h4>
            </caption>
            <!-- Table Header -->
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody id="table-body"></tbody>
          </table>
        </div>
      `;

        const tableBody = document.getElementById("table-body");

        // Iterate over departments to populate the table
        for (const department of departments) {
          const departmentRow = document.createElement("tr");

          // Add row HTML
          departmentRow.innerHTML = `
          <th scope="row">${department.D_Id}</th>
          <td>${department.D_Name}</td>
          <td>${department.D_Desc}</td>
          <td>
            <button type="button" class="btn btn-primary update-btn">Update</button>
            <button type="button" class="btn btn-danger delete-btn">Delete</button>
          </td>
        `;

          // Append the row
          tableBody.appendChild(departmentRow);

          // Add event listeners to buttons
          const updateBtn = departmentRow.querySelector(".update-btn");
          const deleteBtn = departmentRow.querySelector(".delete-btn");

          updateBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent triggering row click
            updateClicked(department.D_Id);
          });

          deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent triggering row click
            deleteClicked(department.D_Id);
          });

          // Add event listener to the row
          departmentRow.addEventListener("click", (event) =>
            rowClicked(event, department.D_Id)
          );
        }
      } else {
        // If no departments are found
        mainContent.innerHTML = `
        <div class="branches-container container h-100 w-100 p-5 text-center align-content-center">
          <h2 class="text-danger">NO DEPARTMENTS FOUND!</h2>
        </div>
      `;
      }
    })
    .catch((err) => {
      console.error("Error fetching departments:", err);
      mainContent.innerHTML = `
      <div class="branches-container container h-100 w-100 p-5 text-center align-content-center">
        <h2 class="text-danger">Failed to load departments. Please try again later.</h2>
      </div>
    `;
    });
}

function rowClicked(event, id) {
  const targetCell = event.target.closest("td, th");
  const cellIndex = targetCell.cellIndex;

  if (cellIndex >= 0 && cellIndex < 3) {
    alert("Department ID: " + id + " clicked!");
  }
}

function updateClicked(id) {
  alert("Update department with ID: " + id);
}

function deleteClicked(id) {
  alert("Delete department with ID: " + id);
}
