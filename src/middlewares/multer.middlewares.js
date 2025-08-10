import multer from "multer";
import path from "path"
import fs from "fs";
import uploade_DIR from "../../config.js"
const uploadPath = uploade_DIR;
export const fileType = {
  images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  documents: ['application/pdf'],

};

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const uniqueName = `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    cb(null, uniqueName)
  }
})
function fileFilter(req, file, cb) {
  const allType = [...fileType.images, ...fileType.documents]
  if (allType.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('In valid file format!'), false)

  }

}
const upload = multer({ storage: storage, fileFilter: fileFilter })

export default upload;