
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __filedir = path.dirname(__filename);

const upload_DIR = path.resolve(__filedir,"uploads");

export default upload_DIR;