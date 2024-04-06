import express from "express";
import { createServer } from "node:http";

import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from 'cookie-parser';

import config from "./configs/env";
import route from "./routes";
import * as redis from "./configs/redis";

dotenv.config();

// Initialize application
const app = express();
const port = config.PORT;
const server = createServer(app);

// Initialize middleware
app.use(morgan(process.env.NODE_ENV === 'dev' ? "dev" : "tiny"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Initialize routes
route(app);

// Start server
if (require.main === module) {
  server.listen(port, async () => {
    await redis.startup();
    console.log("📕 [redis]: Connected to redis");
    // await database.connect();
    console.log("📒 [mongo]: Connected to mongodb");
    // await mailer.startup();
    // console.log("💌 [database]: Connected to mailer");

    console.log(`✅ [server]: Server is running at http://localhost:${port}`);
  });
}

export default app;