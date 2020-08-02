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
    port: number;
    host: string;
  };
  DATABASE: {
    vendor: string;
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
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "3000"),
  },
  DATABASE: {
    vendor: process.env.DATABASE_VENDOR || "postgres",
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    username: process.env.DATABASE_USERNAME || "",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_DATABASE || "",
  },
};

export default configs;
