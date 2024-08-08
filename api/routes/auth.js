import {Router} from 'express';
import {editProfile, login, register, verifyUser} from "../controllers/auth.js"
import auth from '../middleware/auth.js';
const router = Router()

router.post('/register',register)
router.post('/login',login)
router.get("/", auth, verifyUser);
router.put("/edit", auth, editProfile);
router.get('/check',auth, ()=>console.log("checked"))



export default router