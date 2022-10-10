import  server from "./app";
import { port } from './helpers/config'

server.listen(port, ()=> console.log("listen port " + port ))