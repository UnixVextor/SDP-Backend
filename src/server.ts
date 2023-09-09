import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import type { Request, Response } from 'express';

const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json())

app.get("/api", (req:Request,res:Response) => {
    res.send("hello world").status(404)
})

app.listen(port, () => {
    console.log(`server runing on port ${port}`)
})