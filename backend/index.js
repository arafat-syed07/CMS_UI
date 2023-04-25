import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
const app = express();
const PORT = 5000;
mongoose.connect(
  "mongodb+srv://mithilesh:mithilesh@cluster0.lixl2xh.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => console.log(`Server up and running... on ${PORT} `));
