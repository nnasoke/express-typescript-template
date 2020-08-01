import { Router as Controller, Request, Response } from "express";
import * as http from "http-status-codes";

const ctrl = Controller();

/**
 * @returns Json text as greeting message
 */
ctrl.get("/hello", (req: Request, res: Response) => {
  res.status(http.OK).json("Hello there!");
});

export default ctrl;
