import morgan from "morgan";

/**
 * Write access logs into file.
 * @returns morgan middleware
 */
function accessLogs() {
  return morgan("combined");
}

/**
 * Log only 4xx and 5xx responses to console.
 * @returns morgan middleware
 */
function errorLogs() {
  return morgan("short", {
    skip: (req, res) => res.statusCode < 400,
  });
}

export { accessLogs, errorLogs };
