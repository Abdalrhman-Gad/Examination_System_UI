export class OrganizationModel {
  static async fetchBranches() {
    try {
      // Corrected URL with http://
      const response = await fetch("http://127.0.0.1:3000/api/branches");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const branches = await response.json();
      return branches; // Return the fetched branches
    } catch (error) {
      console.error("Error fetching branches:", error); // Updated error message
      return []; // Return an empty array in case of error
    }
  }
}
