import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { BAD_REQUEST } from "http-status-codes";
import Env from "./Env";
import { errorLogs, accessLogs } from "@middleware/requestLogs";
import logger from "@shared/logger";
import BaseRouter from "./Routes";

// Init application
const app = express();

// Basic settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Access & error logs
if (Env.isProduction) app.use(errorLogs());
else app.use(accessLogs());

// APIs
app.use("/api", BaseRouter);

// API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
    error: err.message
  });
});

export default app;
