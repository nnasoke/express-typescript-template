import dotenv from "dotenv";
dotenv.config();
/**
 * @description holding all configuration variables
 */
interface Envs {
  isProduction: boolean;
  serverPort: number;
  serverHost: string;
}

const configs: Envs = {
  isProduction: process.env.NODE_ENV === "production",
  serverPort: parseInt(process.env.PORT || "3000"),
  serverHost: process.env.HOST || "0.0.0.0"
};

export default configs;
