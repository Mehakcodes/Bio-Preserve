const {prisma:dbConfig} = require('../config/index');

exports.getUserDonations=async (req, res)=>{
    try{
        const user_id=req.userId;
        const donations=await dbConfig.donations.findMany({
            where:{user_id},
            include:{
                project:{
                    select:{
                        title:true,
                    }
                }
            } 
        });
        res.status(200).json({status: true, donations});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.makeDonation=async (req, res)=>{
    const user_id=req.userId;
    try{
        const newDonation=await prisma.donations.create({
            data:{
                amount:req.body.amount,
                project_id:req.body.project_id,
                user_id
            }
        });
        res.status(201).json({status: true, donation: newDonation});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}