export class BranchModel {
  static async fetchBranches() {
    try {
      const url = "http://127.0.0.1:3000/api/branches";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const branches = await response.json();
      return branches; // Return the fetched branches
    } catch (error) {
      console.error("Error fetching branches:", error);
      return []; // Return an empty array in case of error
    }
  }

  static async updateBrnach(_branchId, _branchName, __branchLocation) {
    // Define the API URL
    const url = "http://localhost:3000/api/branches/update";

    // Define the payload
    const data = {
      branchId: _branchId, // ID of the branch to update
      branchName: _branchName, // New branch name
      branchLocation: __branchLocation, // New branch code
    };

    // Make the PUT request using fetch
    fetch(url, {
      method: "PUT", // Specify the method
      headers: {
        "Content-Type": "application/json", // Tell the server we're sending JSON
      },
      body: JSON.stringify(data), // Convert the payload to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text(); // Parse the response as text
      })
      .then((responseText) => {
        console.log("Response from server:", responseText); // Log the server response
      })
      .catch((error) => {
        console.error("Error updating branch:", error); // Handle errors
      });
  }
}
