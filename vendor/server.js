const express = require("express");
const sql = require("mssql");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Enable JSON parsing for request bodies

const config = {
  server: "localhost",
  user: "sa",
  password: "123",
  database: "ExaminationSystemDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  port: 1434, // Default SQL Server port
};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// API endpoint to get branches
app.get("/api/branches", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Organization.Branch`;
    res.json(result.recordset); // Send the result as JSON
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close(); // Always close the connection
  }
});

// API endpoint to get branch departments
app.get("/api/branche/departments", async (req, res) => {
  const { branchId } = req.query; // Get branchId from query parameters

  try {
    await sql.connect(config);

    let result;
    if (branchId) {
      // If branchId is provided, filter by it
      result =
        await sql.query`SELECT * FROM Organization.V_Branch_Department WHERE B_Id = ${branchId}`;
    } else {
      // If no branchId, return all records
      result = await sql.query`SELECT * FROM Organization.V_Branch_Department`;
    }

    res.json(result.recordset); // Send the result as JSON
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close(); // Always close the connection
  }
});

// API endpoint to update a branch using stored procedure
app.put("/api/branches/update", async (req, res) => {
  const { branchId, branchName, branchLocation } = req.body;

  if (!branchId || !branchName || !branchLocation) {
    return res
      .status(400)
      .send("Missing required fields: branchId, branchName, branchCode");
  }

  try {
    await sql.connect(config);

    const request = new sql.Request();
    request.input("BranchId", sql.Int, branchId);
    request.input("BranchName", sql.NVarChar(50), branchName);
    request.input("BranchLocation", sql.NVarChar(20), branchLocation);

    await request.execute("Organization.Update_Branch");
    res.send("Branch updated successfully");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close(); // Always close the connection
  }
});

// API endpoint to get exam questions by examId
app.get("/api/exam/questions", async (req, res) => {
  const { examId } = req.query; // Get examId from query parameters

  if (!examId) {
    return res.status(400).send("examId is required");
  }

  try {
    await sql.connect(config);

    // Query the V_Exam_Questions view using the provided examId
    const result =
      await sql.query`SELECT * FROM Exam.V_Exam_Questions WHERE E_Id = ${examId}`;

    // Check if any questions are returned
    if (result.recordset.length === 0) {
      return res.status(404).send("No questions found for the given examId");
    }

    res.json(result.recordset); // Send the result as JSON
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close(); // Always close the connection
  }
});

// API endpoint to get choices for a specific question by question_id
app.get("/api/question/choices", async (req, res) => {
  const { questionId } = req.query; // Get questionId from query parameters

  if (!questionId) {
    return res.status(400).send("questionId is required");
  }

  try {
    await sql.connect(config);

    // Query the Exam.Choices table using the provided questionId
    const result =
      await sql.query`SELECT * FROM Exam.Choices WHERE Question_Id = ${questionId}`;

    // Check if any choices are returned
    if (result.recordset.length === 0) {
      return res.status(404).send("No choices found for the given questionId");
    }

    res.json(result.recordset); // Send the result as JSON
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close(); // Always close the connection
  }
});

app.get("/api/question/add", async (req, res) => {
  const { } = req.query; // Get questionId from query parameters

  if (!questionId) {
    return res.status(400).send("questionId is required");
  }

  try {
    await sql.connect(config);

    // Query the Exam.Choices table using the provided questionId
    const result =
      await sql.query`SELECT * FROM Exam.Choices WHERE Question_Id = ${questionId}`;

    // Check if any choices are returned
    if (result.recordset.length === 0) {
      return res.status(404).send("No choices found for the given questionId");
    }

    res.json(result.recordset); // Send the result as JSON
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close(); // Always close the connection
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use(
  cors({
    origin: "http://127.0.0.1:5501", // Allow only this origin
  })
);
