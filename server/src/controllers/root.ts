import { Response, Request } from "express";
import { connector } from "../helpers/connectToDB";
import { MongoClient } from "mongodb";
import { dbURI } from "../helpers/config";
import { findAllUserPosts, findAllPosts } from "../helpers/dbFunctions";
//import bodyParser from "body-parser";

const mongoClient = new MongoClient(dbURI)

const handler = {
    get: async function (req: Request, res: Response): Promise<void> {
        const user: any = req.query.user
        console.log(user)
        let searcher = findAllPosts
        if(req.query.user) searcher = findAllUserPosts
        try {
            const result = await connector(mongoClient, 'posts', searcher, user)
            res.json(result)
        } catch (e) {
            res.json({error: true})
        }
    },
    post: async function (req: Request, res: Response): Promise<void> {
        console.log(req.body)
        res.json({'tittle': 'we got it'})
    }
}

export default handler