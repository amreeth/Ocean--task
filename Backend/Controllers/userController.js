import User from "../Models/usersModel";
import asyncHandler from 'express-async-handler'


const addUser=asyncHandler(async(req,res)=>{
    try {
        const {name,email,phonenumber,password}=req.body

        const user=await User.create({
            name,email,phonenumber,password
        })
        if(user){
            res.status(200).json({user,
            success:true,
        message:"new user added"})
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})



const getAllUser=asyncHandler(async(req,res)=>{
    try {
        const users=await User.find({})
        if(users.length>0){
            res.status(200).json({
                users,
                success:true,
                message:"users are"
            })
        }else{
            res.status(404).json({
                message:"users not found"
            })
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

export {addUser,getAllUser}