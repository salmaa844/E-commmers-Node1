import * as authService from "./auth.service.js";

export const register = async (req, res, next) => {

    const result = await authService.register(req.body); 
    return res.status(201).json({message: "successful",result});

}

export const login = async (req,res,next)=>{
    const result = await authService.login(req.body);
    return res.status(200).json({message:"succcessful",token:result});
}

export const confirmEmail = async(req,res,next )=>{
    const {email,code} = req.body;
    await authService.confirmEmail({email,code});
    return res.status(200).json({message:"you are ready to login"})

}