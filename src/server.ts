import cors from 'cors';
import 'dotenv/config'
import express, { Application, Request, Response } from 'express';
import { authRouter } from './routes/authRoute'
import { attractionRouter } from './routes/attractionRoute';

const app:Application = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json());

// all router
app.use('/', authRouter);



// API test
app.get("/", (req:Request,res:Response) => {
    res.send("Action ").status(404)
})


app.listen(port, () => {
    console.log(`🚀 Server ready on port ${port}`)
})