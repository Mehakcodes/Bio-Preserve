const {prisma:dbConfig} = require('../config/index');

exports.getEvents=async (req, res)=>{
    try{
        const events= await prisma.events.findMany(
            {
                select:{
                    id:true,
                    title:true,
                    location:true,
                    start:true,
                    end:true
                }
            }
        );
        res.status(200).json({status: true, events});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.createEvent=async (req, res)=>{
    const user_id=req.userId;
    try{
        const newEvent=await dbConfig.events.create({
            data:{
                title:req.body.title,
                location:req.body.location,
                description:req.body.description,
                image_url:req.body.image_url,
                start:req.body.start,
                end:req.body.end,
                user_id:user_id
            }
        });
        res.status(201).json({status: true, event: newEvent});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.attendEvent=async (req,res)=>{
    try{
        const user_id=req.userId;
        const event_id=req.body.event_id;
        await prisma.events.update({
            where:{
                id:event_id
            },
            data:{
                attendees:{
                    connect:{
                        id:user_id
                    },
                },
            },
        });
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.getEventDetails=async (req, res)=>{
    const {id}=req.params;
    try{
        const event=await prisma.events.findUnique({
            where:{
                id:parseInt(id)
            }
        });
        if(!event){
            return res.status(404).json({status: false, msg: 'Event not found'});
        }
        res.status(200).json({status: true, event});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.getUserHostedEvents= async (req, res)=>{
    try{
        const user_id=req.userId;
        const events=await prisma.events.findMany({
            where:{
                user_id:user_id
            }
        });
        res.status(200).json({status: true, events});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.getUserAttendedEvents= async (req, res)=>{
    try{
        const user_id=req.userId;
        const events=await prisma.events.findMany({
            where:{
                attendees:{
                    some:{
                        id:user_id
                    }
                }
            }
        });
        res.status(200).json({status: true, events});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

