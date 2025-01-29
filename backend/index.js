import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import connectDB from "./db.js";
import route from "./routes.js";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);
app.use(express.json());

connectDB();

server.listen(8000, () => {
  console.log("Running on port 8000");
});
