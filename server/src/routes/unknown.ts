import express from "express";
import handler from '../controllers/unknown'

const router = express.Router()

router.get('*',handler)

export default router