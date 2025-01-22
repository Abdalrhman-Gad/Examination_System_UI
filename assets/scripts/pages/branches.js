import { loadCSS } from "../utils/cssloader.js";

export function renderBranches(mainContent) {
  loadCSS("./assets/styles/branches.css");

  const data = [
    { Id: 1, Name: "ITI ASYUT", Location: "ASYUT" },
    { Id: 2, Name: "ITI MINYA", Location: "MINYA" },
    { Id: 3, Name: "ITI CAIRO", Location: "CAIRO" },
    { Id: 4, Name: "ITI ALEX", Location: "ALEXANDRIA" },
    { Id: 5, Name: "ITI SUEZ", Location: "SUEZ" },
    { Id: 6, Name: "ITI LUXOR", Location: "LUXOR" },
    { Id: 7, Name: "ITI QENA", Location: "QENA" },
    { Id: 8, Name: "ITI ZAGAZIG", Location: "ZAGAZIG" },
    { Id: 9, Name: "ITI FAYOUM", Location: "FAYOUM" },
    { Id: 10, Name: "ITI MANSOURA", Location: "MANSOURA" },
  ];

  mainContent.innerHTML = `
    <div class="branches-container container h-100 w-100 p-5">
      <table class="table table-bordered table-hover text-center">
        <caption>
          <h4>Branches</h4>
        </caption>
        <!-- table header -->
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  `;

  const tableBody = document.getElementById("table-body");

  for (const branch of data) {
    const branchRow = document.createElement("tr");

    // Add row HTML
    branchRow.innerHTML = `
      <th scope="row">${branch.Id}</th>
      <td>${branch.Name}</td>
      <td>${branch.Location}</td>
      <td>
        <button type="button" class="btn btn-primary update-btn">Update</button>
        <button type="button" class="btn btn-danger delete-btn">Delete</button>
      </td>
    `;

    // Add row click event
    branchRow.addEventListener("click", (event) =>
      rowClicked(event, branch.Id)
    );

    // Append the row first, then attach event listeners to the buttons
    tableBody.appendChild(branchRow);

    const updateBtn = branchRow.querySelector(".update-btn");
    const deleteBtn = branchRow.querySelector(".delete-btn");

    updateBtn.addEventListener("click", (event) => {
      updateClicked(branch.Id);
    });

    deleteBtn.addEventListener("click", (event) => {
      deleteClicked(branch.Id);
    });
  }
}

function rowClicked(event, id) {
  // Check if the clicked element is within the first 3 columns
  const targetCell = event.target.closest("td, th");

  const cellIndex = targetCell.cellIndex;

  if (cellIndex >= 0 && cellIndex < 3) {
    window.location.hash = `#/branches/departments?branchId=${encodeURIComponent(
      id
    )}`;
  }
}

function updateClicked(id) {
  alert("Update with ID " + id + " clicked!");
}

function deleteClicked(id) {
  alert("Delete with ID " + id + " clicked!");
}
