import express from "express";
import { config } from "dotenv";
import morgan from "morgan"; //provide log description
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

//middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev")); // to be removed in production
import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", appRouter);

export default app;
