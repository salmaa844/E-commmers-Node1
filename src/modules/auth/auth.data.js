import {UserSchema} from "../../../Database/models/user.model.js"

export const findUserByEmail = async(email)=>{
    const user = await UserSchema.findOne({email})
    return user;
};

export const createUser = async(data)=>{
    const user = await UserSchema.create(data);
    return user;
};

export const confirmEmail = async (user) => {
 user.confirmEmail = true;
 user.code = null;
 await user.save();
};

