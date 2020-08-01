import { Router } from "express";
import Hello from "./controllers/hello";
import HealhtCheck from "./controllers/healthCheck";

// health check api
const healthCheck = Router();
healthCheck.use(HealhtCheck);

// the rest othere rouetes
const BaseRouter = Router();
BaseRouter.use(Hello);

export { healthCheck, BaseRouter };
