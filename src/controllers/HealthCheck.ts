import { Router as Controller, Request, Response } from "express";
import * as http from "http-status-codes";

var ctrl = Controller();

ctrl.get("/", (req: Request, res: Response) => {
  res.status(http.OK).json("Ok");
});

export default ctrl;
