import { Collection } from "mongodb";
import {POSTbodyPost} from "../Interfaces/PostInterface";

export const findAllPosts = async (collection: Collection<any>, __: string) => {
    return await collection.find().sort({date:-1}).toArray()
}

export const findAllUserPosts = async (collection: Collection<any>, user: string) => {
    const objFinder = {
        author: user
    }
    return await collection.find(objFinder).sort({date:-1}).toArray()
}

export const putNewPost = async (collection: Collection<any>, PropsObject:POSTbodyPost) => {
    const{author,header,content} = PropsObject
    const curentDate = new Date(Date.now())
    await collection.insertOne({
        author: author,
        header: header,
        content: content,
        date: curentDate,
        update: curentDate,
    })
}



