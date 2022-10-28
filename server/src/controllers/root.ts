import { Response, Request } from "express";
import { connector } from "../helpers/connectToDB";
import { MongoClient } from "mongodb";
import { dbURI } from "../helpers/config";
import {findAllUserPosts, findAllPosts, putNewPost, deletePost, updatePost} from "../helpers/dbFunctions";

const mongoClient = new MongoClient(dbURI)
const collectionName: string = 'posts'

class RootEndpoint {
    constructor(public mongoClient: MongoClient,public collectionName: string) {}
    async get (req: Request, res: Response): Promise<void> {
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
    }

    async post (req: Request, res: Response): Promise<void> {
        console.log(req.body)
        try {
            await connector(mongoClient,collectionName,putNewPost, req.body)
            res.json({'tittle': 'we got it'})
        } catch (error){
            console.log(error)
            res.json({'ERROR':true})
        }
    }

    async delete (req: Request, res: Response): Promise<void>{
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

    async put({body, ...req}: Request, res: Response): Promise<void> {
        console.log('put request')
        console.log(body)
        try {
            await connector(mongoClient,collectionName,updatePost,body)
        } catch (error) {

        }
        res.json({ok:true})
    }
}
 const handler = new RootEndpoint(mongoClient,collectionName)
export default handler