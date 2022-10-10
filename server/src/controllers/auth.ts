import { Response, Request } from "express";

export default {
    getHandler: async function (req: Request, res: Response): Promise<void> {
        res.status(200).render('auth')
    },
    postHandler: async function (req: Request, res: Response): Promise<void> {
        res.send('login post from controller')
    }
}