import mysql from "mysql2/promise"; // For raw MySQL queries

const dbConnection = async () => {
    try {
        const connection = await mysql.createPool({
            host: "127.0.0.1", // MySQL host
            user: "root",      // MySQL username
            password: "Pratiksha@123", // MySQL password
            database: "job_portal",   // MySQL database
            waitForConnections: true,
            connectionLimit: 10,      // Pool size
        });
        console.log("MySQL connected!");
        return connection;
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

export default dbConnection();
