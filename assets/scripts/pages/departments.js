import { loadCSS } from "../utils/cssloader.js";

export function renderDepartments(mainContent, branchId) {
  loadCSS("./assets/styles/branches.css");

  const data = [
    {
      id: 1,
      branch: "ITI ASYUT",
      location: "ASYUT",
      department_id: 1,
      short_name: "WEB",
      department_name: "Web Development Department",
    },
    {
      id: 1,
      branch: "ITI ASYUT",
      location: "ASYUT",
      department_id: 2,
      short_name: "DESIGN",
      department_name: "Graphic Design Department",
    },
    {
      id: 2,
      branch: "ITI MINYA",
      location: "MINYA",
      department_id: 1,
      short_name: "WEB",
      department_name: "Web Development Department",
    },
    {
      id: 2,
      branch: "ITI MINYA",
      location: "MINYA",
      department_id: 3,
      short_name: "CLOUD",
      department_name: "Cloud Computing Department",
    },
    {
      id: 3,
      branch: "ITI CAIRO",
      location: "CAIRO",
      department_id: 4,
      short_name: "AI",
      department_name: "Artificial Intelligence Department",
    },
    {
      id: 4,
      branch: "ITI ALEX",
      location: "ALEXANDRIA",
      department_id: 5,
      short_name: "NETWORK",
      department_name: "Network Engineering Department",
    },
    {
      id: 5,
      branch: "ITI SUEZ",
      location: "SUEZ",
      department_id: 6,
      short_name: "DATA SCIENCE",
      department_name: "Data Science Department",
    },
    {
      id: 6,
      branch: "ITI LUXOR",
      location: "LUXOR",
      department_id: 7,
      short_name: "SECURITY",
      department_name: "Cyber Security Department",
    },
    {
      id: 7,
      branch: "ITI QENA",
      location: "QENA",
      department_id: 8,
      short_name: "MOBILE",
      department_name: "Mobile App Development Department",
    },
    {
      id: 8,
      branch: "ITI ZAGAZIG",
      location: "ZAGAZIG",
      department_id: 9,
      short_name: "GAME DEV",
      department_name: "Game Development Department",
    },
  ];

  const branchName = data.find((item) => item.id === parseInt(branchId));

  if (branchName) {
    mainContent.innerHTML = `
    <div class="branches-container container h-100 w-100 p-5">
      <table class="table table-bordered table-hover text-center">
        <caption>
          <h4>${branchName.branch} Departments</h4>
        </caption>
        <!-- table header -->
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

    const filteredDepartments = data.filter((item) => item.id == branchId);

    for (const department of filteredDepartments) {
      const departmentRow = document.createElement("tr");

      // Add row HTML
      departmentRow.innerHTML = `
      <th scope="row">${department.department_id}</th>
      <td>${department.short_name}</td>
      <td>${department.department_name}</td>
      <td>
        <button type="button" class="btn btn-primary update-btn">Update</button>
        <button type="button" class="btn btn-danger delete-btn">Delete</button>
      </td>
    `;

      // Add row click event
      departmentRow.addEventListener("click", (event) =>
        rowClicked(event, department.department_id)
      );

      // Append the row first, then attach event listeners to the buttons
      tableBody.appendChild(departmentRow);

      const updateBtn = departmentRow.querySelector(".update-btn");
      const deleteBtn = departmentRow.querySelector(".delete-btn");

      updateBtn.addEventListener("click", (event) => {
        updateClicked(department.department_id);
      });

      deleteBtn.addEventListener("click", (event) => {
        deleteClicked(department.department_id);
      });
    }
  } else {
    mainContent.innerHTML = `
    <div class="branches-container container h-100 w-100 p-5 text-center align-content-center">
      <h2 class="text-danger">NO DEPARTMENTS FOUND!</h2>
    </div>
  `;
  }
}

function rowClicked(event, id) {
  // Check if the clicked element is within the first 3 columns
  const targetCell = event.target.closest("td, th");

  const cellIndex = targetCell.cellIndex;

  if (cellIndex >= 0 && cellIndex < 3) {
    alert("deaprtment : " + id + " clicked");
    // window.location.hash = `#/branches/departments?branchId=${encodeURIComponent(
    //   id
    // )}`;
  }
}

function updateClicked(id) {
  alert("Update with ID " + id + " clicked!");
}

function deleteClicked(id) {
  alert("Delete with ID " + id + " clicked!");
}
