const express = require("express");
const sql = require("mssql");
const path = require("path");
const cors = require("cors"); // Import the cors package

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

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

// API endpoint to get exams
app.get("/api/exams", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM EXAM.EXAMS`;
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
