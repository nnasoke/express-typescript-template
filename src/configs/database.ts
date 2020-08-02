import Env from "../env";

const base: object = {
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
};

let opts: object;

/**
 * using sqlite in test mode
 * otherwise, use configured values.
 */
if (Env.MODE.test) {
  opts = {
    type: "sqlite",
    database: "./test.db.sqlite3",
    ...base,
  };
} else {
  opts = {
    type: Env.DATABASE.vendor,
    host: Env.DATABASE.host,
    port: Env.DATABASE.port,
    username: Env.DATABASE.username,
    password: Env.DATABASE.password,
    database: Env.DATABASE.database,
    ...base,
  };
}

export = opts;
