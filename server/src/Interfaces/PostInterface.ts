export interface POSTbodyPost {
    author: string,
    header: string,
    content: string,
}

export interface PostToDb extends POSTbodyPost {
    date: Date,
    update: Date
}

interface toPut {
    header: string,
    content: string
}

export interface UpdatePostInterface {
    toFind: PostToDb,
    toPut: toPut
}