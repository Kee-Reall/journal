import { Response, Request } from "express";
import { connector } from "../helpers/connectToDB";
import { MongoClient } from "mongodb";
import { dbURI } from "../helpers/config";
import { findAllUserPosts, findAllPosts } from "../helpers/dbFunctions";
//import bodyParser from "body-parser";

const mongoClient = new MongoClient(dbURI)
const collectionName: string = 'posts'

const handler = {
    get: async function (req: Request, res: Response): Promise<void> {
        const user: any = req.query.user
        console.log(user)
        let searcher = findAllPosts
        if(req.query.user) searcher = findAllUserPosts
        try {
            const result = await connector(mongoClient, collectionName, searcher, user)
            res.json(result)
        } catch (e) {
            res.json({error: true})
        }
    },
    post: async function (req: Request, res: Response): Promise<void> {
        console.log(req.body)
        const {author, header, content} = req.body
        const curentDate = new Date(Date.now())
        try {
            await connector(mongoClient,'posts',() =>)
            res.json({'tittle': 'we got it'})
        } catch (error){
            console.log(error)
            res.json({'ERROR':true})
        }
    }
}

export default handler