import morgan from "morgan";
import logger from "../config/logger.js";

// Stream logs from Morgan to Winston
const stream = {
  write: (message) => logger.info(message.trim()),
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream }
);

export default morganMiddleware;
