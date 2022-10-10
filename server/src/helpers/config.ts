import * as dotenv from 'dotenv'
import path from "path";

dotenv.config({
    path: path.resolve('config','Variables')
})

const dbHost = process.env.dbHost ?? 'localhost'
const dbPort = process.env.dbPort ?? '27017'
const dbName = process.env.dbName ?? 'posts'

export const port = process.env.port ?? 8000
export const dbURI = `mongodb://${dbHost}:${dbPort}/${dbName}`