import App from "./app";
import Env from "./env";
import logger from "./shared/logger";

App.listen(Env.SERVER.port, Env.SERVER.host, () => {
  logger.info(`Server is running at ${Env.SERVER.host}:${Env.SERVER.port}.`);
});
