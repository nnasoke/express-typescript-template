import fs from "fs";
import path from "path";
import morgan from "morgan";

/**
 * Write access logs into file.
 * @returns morgan middleware
 */
function accessLogs() {
  return morgan("combined", {
    stream: fs.createWriteStream(path.join(__dirname, "../../access.log"), {
      flags: "a"
    })
  });
}

/**
 * Log only 4xx and 5xx responses to console.
 * @returns morgan middleware
 */
function errorLogs() {
  return morgan("short", {
    skip: function (req, res) {
      return res.statusCode < 400;
    }
  });
}

export { accessLogs, errorLogs };
