// ------ Setup Dependencies ------ //
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/connect");

// ------ Create app using express() ------ //
const app = express();

const port = process.env.PORT || 3000;

//------ Middlewares ------ //
app.use(express.json());
app.use(cors());

//------ Allow access to different routes ------ //
const itemsRouter = require("./routes/items");
app.use("/uploads", itemsRouter);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();