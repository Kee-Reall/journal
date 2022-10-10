import express from 'express'
//import cors from 'cors'
import login from './routes/auth'
import root from './routes/root'
import unknown from "./routes/unknown";
import getIP from "./midleware/getIP";

const app = express()

app.set( "view engine", "ejs" );

//app.use(cors)
app.use(getIP)


app.use(root)
app.use(login)
app.use(unknown)

export default app