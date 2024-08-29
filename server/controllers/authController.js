const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {config,prisma:dbConfig} = require('../config/index');


exports.signup=async (req, res)=>{
    const {name, email ,mobile_number, password}=req.body;
    const hashedPassword=await bcrypt.hash(password, 10);
    try{
        // Check if a user with the given email already exists
        const existingUser = await prisma.users.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            // If user exists, respond with a 409 Conflict status
            return res.status(409).json({ status: false, msg: 'User with this email already exists.' });
        }

        const newUser=await dbConfig.users.create({
            data:{
                name,
                email,
                mobile_number,
                password: hashedPassword
            }
        });
        res.status(201).json({status: true, user: newUser});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
};

exports.signin=async (req, res)=>{
    const{email, password}=req.body;
    try{
        const user=await prisma.users.findUnique({
            where:{
                email:email
            }
        });
        if(!user){
            return res.status(404).json({status: false, msg: 'User not found'});
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({status: false, msg: 'Invalid credentials'});
        }
        const token=jwt.sign({id: user.id}, config.jwtSecret, {expiresIn: '1h'});
        res.status(200).json({status: true, user}).cookie('token', token,{httpOnly: true, maxAge: 3600000});
    }
    catch(e){
        res.status(500).json({status: false, msg: e.message});
    }
}
