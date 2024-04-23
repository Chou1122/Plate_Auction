import express from "express";
import { createServer } from "node:http";
const { Server } = require("socket.io");

import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import * as cors from "cors";

import config from "./configs/env";
import route from "./routes";
import * as redis from "./configs/redis";
import { Socket } from "socket.io";

dotenv.config();

// Initialize application
const app = express();
const port = config.PORT;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Initialize middleware
app.use(morgan(process.env.NODE_ENV === 'dev' ? "dev" : "tiny"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Cors
app.use(cors.default({
  origin: config.FRONTEND,
  credentials: true,
  methods: ["GET", "PUT", "POST", "DELETE"],
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type, Authorization"],
}));

// Initialize routes
route(app);

// Socket
io.on('connection', (socket: Socket) => {
  console.log('a user connected');

  socket.on("new", (data) => {
    io.emit("new", data);
  })
});

// Start server
if (require.main === module) {
  server.listen(port, async () => {
    await redis.startup();
    console.log("📕 [redis]: Connected to redis");
    console.log("📒 [mongo]: Connected to mongodb");
    console.log("💌 [database]: Connected to mailer");

    console.log(`✅ [server]: Server is running at http://localhost:${port}`);
  });
}

export default app;