import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDatabase  from "./src/configs/db.config.js";
// import apiRouter from "./src/routes/router.js";
import sinhvienRouter from "./src/routes/sinhvien.routes.js";
dotenv.config();

connectDatabase();

// mongoose.connect("mongodb://localhost:27017/QLSV", {useNewUrlParser: true, useUnifiedTopology: true})
//        .then(() => {
//               console.log("Connected!");
//        })
//        .catch((err) => {
//               console.log("Error connecting to db");
//        });

const app = express();
const port = process.env.PORT || 3333;

app.use(helmet());
// app.use(morgan("tiny"));
// const accessLogStream = rfs.createStream("access.log", {
//        interval: "1d",
//        path: path.join(__dirname, "log"),
//      });
//      app.use(
//        isProduction ? morgan("combined", { stream: accessLogStream }) : morgan("dev")
//      );
app.use(cors());
app.use(bodyParser.json());

app.use('/api/', sinhvienRouter);
app.get("/", (req, res) => {
       console.log("dsadasdas");
       res.json({
              message: "Hell World"
       });
});

app.get("/api/", (req, res) => {
       console.log("dsadasdas");
       res.json({
              message: "Xin chao"
       });
});

app.listen(port, () => {
       console.log(`Server is listening on https://localhost:${port}`);
});