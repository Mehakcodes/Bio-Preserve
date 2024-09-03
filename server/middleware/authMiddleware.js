const jwt=require('jsonwebtoken');
const {config}=require('../config/index');

const verifyToken=(req, res, next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({status: false, msg: 'Login to proceed'});
    }
    try{
        const decoded=jwt.verify(token, config.jwtSecret);
        req.userId=decoded.id;
        next();
    }
    catch(e){
        res.status(401).json({status: false, msg: 'Unauthorized'});
    }
}

module.exports=verifyToken;
