import express from 'express'
import cors from 'cors'
import root from './routes/root'
import unknown from "./routes/unknown";
import getIP from "./middleware/getIP";
import bodyParser from "body-parser";

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(getIP)


app.use(root)
app.use(unknown)

export default app