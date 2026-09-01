const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    console.log("URI loaded:", !!process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("mongodb connected");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};

module.exports = connectDb;
