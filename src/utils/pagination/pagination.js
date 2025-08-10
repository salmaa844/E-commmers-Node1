const  getPagination = (req)=>{
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    return{page,limit,skip}
}

const getPaginationData = (data,page,limit)=>{

    const {count,results} = data;
    const totalpage = Math.ceil(count / limit);
    return{
        pagination:{
            count,
            totalpage,
            CurrentPages:page,
            limit,

        },
        results
    }
  

}
export {
    getPagination,
    getPaginationData
} 