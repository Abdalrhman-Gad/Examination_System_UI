export class DepartmentModel {
  static async fetchBranchDepartments(branchId) {
    try {
      const url = `http://127.0.0.1:3000/api/branche/departments?branchId=${branchId}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const departments = await response.json();
      return departments; // Return the fetched departments
    } catch (error) {
      console.error("Error fetching branch departments:", error);
      return []; // Return an empty array in case of error
    }
  }
}
