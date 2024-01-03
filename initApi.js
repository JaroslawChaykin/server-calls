import express from "express";
import cors from "cors"
import dotenv from "dotenv"

export function initApi() {
    dotenv.config();

    const port = process.env.PORT || 4000;
    const api = express();

    api.use(cors())
    api.use(express.json())

    api.listen(port, () => {
        console.log('STARTED on ' + `http://localhost:${port}`)
    })

    return api
}