import { Router } from "express";
import Hello from "./controllers/Hello";

const routes = Router();
routes.use(Hello);

export default routes;
