import express from "express";
import handler from '../controllers/root'

const router = express.Router({
    caseSensitive: false
})

const rootString: string = '/'

router.get(rootString,handler.get)
router.post(rootString,handler.post)
router.delete(rootString, handler.delete)
router.put(rootString,handler.put)

export default router