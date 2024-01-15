import { AppDataSource } from "../data-source"
import{User3} from "../entity/userModel3"
import bcrypt from "bcryptjs"
import {check, validationResult} from "express-validator"

const signup = async(req,res,next)=>
{
    try
    {

    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty())
    {
        return res.json("invalid email")
    }


    const email = req.body.email
    const userName = req.body.userName
    const password = req.body.password


    const hashedPass = await bcrypt.hash(password,12)
    
        const user = new User3()
        user.email = email
        user.userName = userName
        user.password = hashedPass
        await AppDataSource.manager.save(user)
        console.log("user saved:",user)
        return res.status(201).json
        ({
        msg:'user created successfully',
        userName: user.userName,
        email: user.email,
        password: user.password
        })
      
    }
    catch(error)
    {
        console.log("error in user creation")
       
        // err.statusCode = 400;
       throw error
    }
}

const login = async (req,res,next)=>
{
    try
    {

    const email = req.body.email
    const password = req.body.password
  
        const repos = AppDataSource.getRepository(User3)
        const findUser = await repos.findOne(
        {where:
        {email:email}
        })

        if(!findUser)
        {
            return res.status(400).json({msg:"user does not exists"})
        }

        const userPass = bcrypt.compare(password,findUser.password)
        
        if(!userPass)
        {
            return res.status(400).json({msg:'password is incorrect'})
        }
        

        
    }
    catch(error)
    {
        console.log("error in user creation")
       
        // err.statusCode = 400;
       throw error
    }
    

}


export default {
    signup, login

}