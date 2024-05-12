import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSideBar,updateUserStatus } from '../controllers/user.controller.js';
const router=express.Router();
router.get('/',protectRoute, getUsersForSideBar)
router.put("/:id",updateUserStatus)
export default router