import { getCategoryById } from "../modules/category/category.data.js"
import Apperror from "./Apperror.js"


export const validateAttributesByCategoryId = async (categoryId, productAttributes) => {

    const category = await getCategoryById(categoryId)
    if (!category) throw new Apperror("category nof found", 400);

    const attributesByName = {};

    category.attributes.forEach(attr => {
        attributesByName[attr.name] = attr
    })

    for (const attr of productAttributes) {
               
        const categoryAttributes = attributesByName[attr.name];
        if (!categoryAttributes) return false;

        const values = attr.value;
        if (!Array.isArray(values)) return false;

        for (const val of values) {
            if (categoryAttributes.type === "string" && typeof val!== "string")return false;
            if (categoryAttributes.type === "number" && typeof val!== "number") return false;
            
            if (categoryAttributes.type === "enum" ){
                if(categoryAttributes.allowCustomValue){
                    if(typeof val !== "string") return false
                }else{
                    if(!categoryAttributes.options.includes(val))  return false
                }
            }
                
        }
    }

    return true;
}
