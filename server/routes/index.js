const express=require('express');
const router=express.Router();

const authRouter=require('./auth');
const eventsRouter=require('./event');
const projectRouter=require('./project');
const rewardRouter=require('./reward');
const donateRouter=require('./donate');

router.use('/auth',authRouter);
router.use('/events',eventsRouter);
router.use('/projects',projectRouter);
router.use('/rewards',rewardRouter);
router.use('/donate',donateRouter);

module.exports=router;