import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import creationRouter from "./routers/creationRouter"

dotenv.config();
const server = express();

server.use(cors());
server.use(express.json());

server.use(creationRouter);

const PORT = process.env.PORT
server.listen(PORT || 4000, () => console.log(`server listen on port ${PORT}`));