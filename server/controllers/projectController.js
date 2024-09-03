const {prisma:dbConfig} = require('../config/index');

exports.getProjects=async (req, res)=>{
    try{
        const projects=await prisma.projects.findMany();
        res.status(200).json({status: true, projects});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.getProjectDetails=async (req, res)=>{
    const {id}=req.params;
    try{
        const project=await prisma.projects.findUnique({
            where:{
                id:parseInt(id)
            }
            
        });
        if(!project){
            return res.status(404).json({status: false, msg: 'Project not found'});
        }
        res.status(200).json({status: true, project});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.createProject=async (req, res)=>{
    const {title, description, image_url,deadline,amount_needed, location }=req.body;
    try{
        const newProject=await prisma.projects.create({
            data:{
                title,
                description,
                image_url,
                deadline,
                amount_needed,
                location,
                user_id:req.userId
            }
        });
        res.status(201).json({status: true, project: newProject});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}

exports.getUserProjects=async (req, res)=>{
    try{
        const user_id=req.userId;
        const projects=await prisma.projects.findMany({
            where:{user_id}
        });
        res.status(200).json({status: true, projects});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}