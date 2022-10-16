import express from "express";
import handler from '../controllers/root'

const router = express.Router({
    caseSensitive: false
})

router.get('/',handler.get)
router.post('/',handler.post)
router.delete('/', handler.delete)
router.put('/',handler.put)

export default router