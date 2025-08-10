
import path from "path";
import fs from "fs"
import upload_DIR from "../../../config.js";
import Apperror from "../Apperror.js";
const deleteImageFile = async(image)=>{
    if(image?.name){
        const imagePath = path.join(upload_DIR,image.name)
        try{
            await fs.promises.access(imagePath);
            await fs.promises.unlink(imagePath);
        }catch(error){
            throw new Apperror("Error deleting image file ",500)
        }
    }

}
export default deleteImageFile;