import Env from "../env";
import { ConnectionOptions } from "typeorm";

const opts: ConnectionOptions = {
  type: "postgres",
  host: Env.DATABASE.host,
  port: Env.DATABASE.port,
  username: Env.DATABASE.username,
  password: Env.DATABASE.password,
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
};

export = opts;
