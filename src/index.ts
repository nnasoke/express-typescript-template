import App from "./App";
import Env from "./Env";
import logger from "@shared/logger";

App.listen(Env.serverPort, Env.serverHost, () => {
  logger.info(`Server is running at ${Env.serverHost}:${Env.serverPort}.`);
});
