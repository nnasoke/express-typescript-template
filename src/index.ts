import App from "./App";
import Envs from "./Envs";
import logger from "@shared/logger";

App.listen(Envs.serverPort, Envs.serverHost, () => {
  logger.info(`Server is running at ${Envs.serverHost}:${Envs.serverPort}.`);
});
