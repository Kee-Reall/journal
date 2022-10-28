import { Response, Request, NextFunction } from "express";

export default function getIP(req: Request,_: Response, next: NextFunction) {
    console.log(req.socket.remoteAddress ?? `IP is ${undefined}`)
    next()
}