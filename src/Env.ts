import dotenv from "dotenv";
dotenv.config();

/**
 * @description holding all configuration variables
 */
interface Env {
  MODE: {
    test: boolean;
    develop: boolean;
    production: boolean;
  };
  SERVER: {
    serverPort: number;
    serverHost: string;
  };
  DATABASE: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
}

const configs: Env = {
  MODE: {
    test: process.env.NODE_ENV === "test",
    develop: process.env.NODE_ENV === "development",
    production: process.env.NODE_ENV === "production",
  },
  SERVER: {
    serverPort: parseInt(process.env.PORT || "3000"),
    serverHost: process.env.HOST || "0.0.0.0",
  },
  DATABASE: {
    host: process.env.PG_HOST || "localhost",
    port: parseInt(process.env.PG_PORT || "5432"),
    username: process.env.PG_USERNAME || "",
    password: process.env.PG_PASSWORD || "",
    database: process.env.PG_DATABASE || "",
  },
};

export default configs;
