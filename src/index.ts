import App from "./app";
import Env from "./env";
import logger from "./shared/logger";

App.listen(Env.serverPort, Env.serverHost, () => {
  logger.info(`Server is running at ${Env.serverHost}:${Env.serverPort}.`);
});
