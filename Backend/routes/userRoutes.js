import express from 'express'
import { changePassword, getMyprofile, login, logout, register, updateProfile } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
import { removeProduct } from '../controllers/productController.js';
import { upload } from '../middlewares/multer.js';

const router= express.Router();
// 
// 
// 
router.route('/register').post(upload.fields([{
    name:'avatar',
    maxCount:1
},
{
    name:'coverImage',
    maxCount:1
}
]),register)
// router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout) 
router.route('/me').put(isAuthenticated,getMyprofile);
router.route('/changepassword').put(isAuthenticated,changePassword);
router.route("/updateProfile").put(isAuthenticated,updateProfile)
router.route("/removeproduct").put(removeProduct)

export default router;