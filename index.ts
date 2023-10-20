import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./types";

const app: Application = express();
const http = require("http").Server(app);

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(http, {
  cors: {
    origin: "*",
  },
});

//For env File
dotenv.config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
