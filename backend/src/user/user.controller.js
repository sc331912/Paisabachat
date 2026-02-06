export const createUser= async (req,res) =>{

try{
    const data= req.body;
    console.log(data);
    res.json({message:"User created successfully"});

}catch(err){
    res.status(500).json({message:"Internal Server Error"});
}
}

export const login= async (req,res) =>{

try{
    const data= req.body;
    console.log(data);

}catch(err){
    res.status(500).json({message:"Internal Server Error"});
}
}