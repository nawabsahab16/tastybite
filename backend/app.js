import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
dotenv.config({path: "./config/config.env"});

export default app;
