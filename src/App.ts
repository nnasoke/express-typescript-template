import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { BAD_REQUEST } from "http-status-codes";
import Env from "./env";
import { errorLogs, accessLogs } from "./middleware/requestLogs";
import logger from "./shared/logger";
import { BaseRouter, healthCheck } from "./routes";
import { initDb } from "./shared/connection";

// initialise database at first load
(async () => {
  await initDb()
    .then()
    .catch((err) => {
      throw err;
    });
})();

// Init application
const app = express();

// Basic settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Access & error logs, but nothing in test mode.
if (Env.MODE.production) app.use(errorLogs());
else if (Env.MODE.develop) app.use(accessLogs());

// APIs
app.use("/health-check", healthCheck);
app.use("/api", BaseRouter);

// API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

export default app;
