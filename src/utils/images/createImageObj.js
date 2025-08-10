import upload_DIR from "../../../config.js"
const createImageObject = (file)=>{
    if(!file) {
        return null
    }else{
        return {
            url:`${upload_DIR}/${file.filename}`,
            name:file.filename,
            type:file.mimetype
        }
    }

}
export default createImageObject;