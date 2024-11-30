const express=require('express');

const {User,Account}=require("../db");
const jwt=require("jsonwebtoken")


const router=express.Router();

module.exports=router;

const z=require("zod");
const { JWT_SECRET } = require("../config")
const { authMiddlewear } = require("../middlewear");
const signupBody=z.object({
firstName: z.string(),
lastName: z.string(),
username: z.string().email(),
password: z.string()
})
router.post('/signup', async (req,res)=>{
    const {success}=signupBody.safeParse(req.body);
    if(!success){
       return res.status(411).json({
        message: "Incorrect inputs"
       })
    }
    const existingUser=await User.findOne({
        username:req.body.username
    })
     if(existingUser){
       return res.status(411).json({
            msg:"Email already exists"
        })
     }
     const user= await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
     })
     const userId=user._id;
     await Account.create({
        userId: userId,
        balance: 1+ Math.random() *10000
     })
     const token=jwt.sign({
        userId
     },JWT_SECRET);
     res.json({
        message:"User created successfully",
        token:token
     })
})

const signinBody=z.object({
    username:z.string().email(),
    password:z.string()
})
router.post('/signin',async (req,res)=>{
    const success=signinBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg:"Invalid Inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(user){
        const token=jwt.sign({
            userId: user._id,
        },JWT_SECRET);
        res.json({
            token:token,
        })
        return;
    }
    res.status(411).json({
        msg:"Error while loggin in"
    })
})

const updateBody=z.object({
    firstName: z.string().optional(),
lastName: z.string().optional(),
password: z.string().optional()
})

router.put("/",authMiddlewear,async(req,res)=>{
    const success=updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg:"Update Failed"
        })
    }
    await User.updateOne(req.body,{
        id:req.userId
    })
    res.json({
        msg:"Updated successfully"
    })
})
router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || "";
    const users=await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
            }, {
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
})
})

module.exports = router;