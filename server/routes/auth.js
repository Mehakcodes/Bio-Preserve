const express= require('express');
const router=express.Router();

const authController=require('../controllers/authController');
const verifyToken=require('../middleware/authMiddleware');

router.post('/signup',authController.signup);
router.post('/signin',authController.signin);
router.get('/signout',verifyToken,authController.signout);


module.exports=router;
