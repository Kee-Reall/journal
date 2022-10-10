import { Response, Request } from "express";
import { connector } from "../helpers/connectToDB";
import { MongoClient } from "mongodb";
import { dbURI } from "../helpers/config";
import { findAllUserPosts } from "../helpers/dbFunctions";


export default async function (req: Request, res: Response): Promise<void> {
    try {
        const result = await connector(new MongoClient(dbURI), 'posts',
            findAllUserPosts,'admin'
        )
        res.json( result )
    } catch (e) {
        res.render('unknown')
    }

}