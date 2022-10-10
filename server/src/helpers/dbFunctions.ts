import { Collection } from "mongodb";

export const findAllUserPosts = async (collection: Collection<any>, user: string) => {
    const objFinder = {
        author: user
    }
    return await collection.find(objFinder).toArray()
}



