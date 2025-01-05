import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); //for middleware

app.use(express.json()); //to accept the json data

app.use(express.urlencoded({ extended: true })); //to accept the form data from URL

app.use(express.static("public")); //to access the public folder

app.use(cookieParser()); //to parse the cookie

//routes
import userRoutes from "./routes/user.routes.js";

//routes decclaration
app.use("/api/v1/users", userRoutes);

export default app;
