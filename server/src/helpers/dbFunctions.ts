import { Collection } from "mongodb";
import {POSTbodyPost, UpdatePostInterface} from "../Interfaces/PostInterface";

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

export const updatePost = async (collection: Collection<any>, {toFind,toPut}: UpdatePostInterface) => {
    console.log('updatePost is working')
   const searcher: any = {  // костыль связан с тем что дата из объекта запроса не совпадает с датой в бд, рефакторить эту проблему позже
       author: toFind.author,
       header: toFind.header,
       content: toFind.content,
   }
    await collection.findOneAndUpdate(searcher,{
        $set: {
            ...toPut,
            update: new Date(Date.now())
        }
    })
}



