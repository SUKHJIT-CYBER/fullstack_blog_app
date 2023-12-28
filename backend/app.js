import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user-route.js';

const app = express();

// Use the user route
app.use(express.json());
app.use("/api/user", userRoute);


mongoose
  .connect('mongodb+srv://sukhjit753159:gLZoLY5Ef7jg31Yu@cluster0.gsxg7a6.mongodb.net/blogapp?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });
