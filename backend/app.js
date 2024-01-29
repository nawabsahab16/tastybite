import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(
    cors ({
        origin:[process.env.FRONTEND_URL],
        method: ["POST"],
        credentials : true,
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true }));

export default app;
