import express from "express";
import handler from '../controllers/auth'

const { getHandler, postHandler} = handler

const router = express.Router()

router.get('/auth',getHandler)
router.post('/auth',postHandler)

export default router