const sql = require("mssql");

// Define your configuration object with the correct values
const config = {
  server: "localhost",
  user: "sa",
  password: "123",
  database: "ITI",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  port: 1434, // Use Windows Authentication (no need for user/password)
};

// Connect to SQL Server
sql
  .connect(config)
  .then(() => {
    console.log("Connected to SQL Server");
    // Example query
    return sql.query`SELECT * FROM Instructor`;
  })
  .then((result) => {
    console.log(result.recordset); // Output the query result
  })
  .catch((err) => {
    console.error("Error:", err);
  })
  .finally(() => {
    sql.close(); // Always close the connection
  });
