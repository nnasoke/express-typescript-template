import { Router } from "express";
import HealhtCheck from "./controllers/healthCheck";

// health check api
const healthCheck = Router();
healthCheck.use(HealhtCheck);

// the rest othere rouetes
const BaseRouter = Router();

export { healthCheck, BaseRouter };
