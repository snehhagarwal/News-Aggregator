import News from "../Models/news.js";

export const loginReporter= async(req,res)=>{
    const {name , password}=req.body;
    if(!name || !password){
        return res.status(400).json({message:"ID Password Required"});
    }
    try{
        const news=await News.findOne({"reporters.id":name});
        if(!news){
            return res.status(404).json({message:"Reporter notfound"});
        }
        const reporter=news.reporters.find((repoter)=>repoter.id==name);
        if(reporter.password !== password){
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", reporter });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};