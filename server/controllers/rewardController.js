const prisma = require('../config/dbConfig');
const {prisma:dbConfig} = require('../config/index');

exports.getRewards=async (req, res)=>{
    try{
        const rewards=await prisma.rewards.findMany();
        res.status(200).json({status: true, rewards});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
};

exports.claimReward=async (req, res)=>{
    try{
        const reward_id=req.params.id;
        const user_id=req.userId;
        const reward=await prisma.rewards.findUnique({where: {id: reward_id}});
        const user=await prisma.users.findUnique({where: {id: user_id}});
        if(!reward){
            return res.status(404).json({status: false, msg: 'Reward not found'});
        }
        if(user.tokens < reward.tokens_required){
            return res.status(400).json({status:false, msg: 'Insufficient tokens'});
        }
        await prisma.users.update({
            where:{id:user_id},
            data:{
                tokens: user.tokens-reward.tokens_required
            },
        });
        await prisma.rewards_claimed.create({
            data:{
                user_id,
                reward_id
            },
        });
        res.status(200).json({status: true, msg: 'Reward claimed successfully'});
    }
    catch(e){
        res.status(500).json({status: false, msg: 'Internal server error'});
    }
};

exports.getClaimedRewards=async (req, res)=>{
    try{
        const user_id=req.userId;
        const claimedRewards=await prisma.rewards_claimed.findMany({
            where:{user_id},
        
            include:{rewards:true}
        });
        res.status(200).json({status: true, claimedRewards});
    }
    catch(e){
        res.status(500).json({status: false, msg: 'Internal server error'});
    }
}

