import mongoose from "mongoose";
import logger from "./logger.js";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    logger.error(" Mongo URI missing in .env file");
    process.exit();
  }

  try {
    await mongoose.connect(MONGO_URI);
     logger.info('✔ MongoDB connected successfully');

    // optional event logger
    mongoose.connection.on("connected", () => {
       logger.info('✔ MongoDB connected successfully');
    });

    mongoose.connection.on("error", (err) => {
      logger.error(`MongoDB error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDb Disconnected");
    });
  } catch (error) {
    logger.error(`Initial MongoDB Connection Error: ${err.message}`);

    // retry after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
