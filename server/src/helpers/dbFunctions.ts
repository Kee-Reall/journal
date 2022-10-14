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
    const currentDate = new Date(Date.now())
    await collection.insertOne({
        ...PropsObject,
        date: currentDate,
        update: currentDate,
    })
}

export const deletePost = async (collection: Collection<any>, PropsObject:POSTbodyPost) => {
    await collection.findOneAndDelete(PropsObject)
}



