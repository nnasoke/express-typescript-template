import options from "../configs/database";
import { createConnection, ConnectionOptions, Connection } from "typeorm";

function initDb(): Promise<Connection> {
  return createConnection(options as ConnectionOptions);
}

export { initDb };
