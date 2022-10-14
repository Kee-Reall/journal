import { Response, Request } from "express";
import { connector } from "../helpers/connectToDB";
import { MongoClient } from "mongodb";
import { dbURI } from "../helpers/config";
import {findAllUserPosts, findAllPosts, putNewPost, deletePost} from "../helpers/dbFunctions";

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
        try {
            await connector(mongoClient,collectionName,putNewPost, req.body)
            res.json({'tittle': 'we got it'})
        } catch (error){
            console.log(error)
            res.json({'ERROR':true})
        }
    },

    delete: async function (req: Request, res: Response): Promise<void>{
        console.log('delete request')
        console.log(req.body)
        try {
            const authorCheck: boolean = req.body.hasOwnProperty('author')
            const headerCheck: boolean = req.body.hasOwnProperty('header')
            const contentCheck: boolean = req.body.hasOwnProperty('content')
            if ( authorCheck && headerCheck && contentCheck) {
                await connector(mongoClient,collectionName,deletePost, req.body)
                res.json({Delete: "OK"})
            } else {
                res.json({Delete: "Incorrect"})
            }
        } catch (error){
           console.log(error)
           res.json({'ERROR':true, 'Type':'Delete Error'})
        }
    }


}

export default handler