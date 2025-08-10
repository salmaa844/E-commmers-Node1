
function buildOrderArray(sortByRaw,orderRaw,allowedCoulmns=[]){
    const sortBy = sortByRaw?.split(",") || ["createdAt"]
    const order = orderRaw?.split(",") || ["DESC"]

    const orderArray = [];

    sortBy.forEach((col,index)=>{
        if(allowedCoulmns.length && !allowedCoulmns.includes(col))return;
        const dir = (order[index] || "DESC" ).toUpperCase();
        if(!["ASC","DESC"].includes(dir)) return;
        orderArray.push([col,dir]);
    })

    

return orderArray
}
export default buildOrderArray;