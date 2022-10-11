import { Collection, MongoClient } from "mongodb";

type FixMe = any

export const connector = async (
    client: MongoClient,
    collectionName: string,
    callback: Function,
    prop?: any
): Promise<FixMe> => {
    try {
        await client.connect()
        console.log('connection is up')
        const collection: Collection<Document> = client.db().collection(collectionName)
        const Result: Collection<any> = await callback(collection,prop)
        await client.close()
        console.log('connector helper is finished')
        return Result
    } catch (e) {
        console.log(e)
        return undefined
    }
}
