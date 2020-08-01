import { Router as Controller, Request, Response } from "express";
import * as http from "http-status-codes";

const ctrl = Controller();

ctrl.get("/", (req: Request, res: Response) => {
  res.status(http.OK).send("Ok");
});

export default ctrl;
