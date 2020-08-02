import options from "../configs/database";
import { createConnection } from "typeorm";

export default createConnection(options);
