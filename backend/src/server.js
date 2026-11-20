
import dns from "node:dns";

// Configure DNS before connecting to MongoDB
dns.setServers(["1.1.1.1", "1.0.0.1"]);

import connectDB from "./db/dbConnect.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {

        // Listen for Express application errors
        app.on("error", (error) => {
            console.log("Express Application Error:", error);
        });

        // Start the server after successful database connection
        app.listen(PORT, () => {
            console.log(`Server Running On Port ${PORT}`);
        });

    })
    .catch((error) => {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    });
