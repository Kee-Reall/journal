import { Collection } from "mongodb";
import {POSTbodyPost} from "../Interfaces/PostInterface";

export const findAllPosts = async (collection: Collection<any>, __: string) => {
    return await collection.find().toArray()
}

export const findAllUserPosts = async (collection: Collection<any>, user: string) => {
    const objFinder = {
        author: user
    }
    return await collection.find(objFinder).toArray()
}

export const putNewPost = async (collection: Collection<any>, PropsObject:POSTbodyPost) => {
    collection.insertOne<>()
}



