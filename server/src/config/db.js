import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error(" Mongo URI missing in .env file");
    process.exit();
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log(" MongoDb connected successfully");

    // optional event logger
    mongoose.connection.on("connected", () => {
      console.log("MongoDb Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoes connection has error", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDb Disconnected");
    });
  } catch (error) {
    console.error("Initial Connection error");
    console.error(error.message);

    // retry after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

// module.exports = () =>
//   mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: tue,
//   });

export default connectDB;
