import News from "../Models/news.js";

export const addComment= async (req,res)=>{
    try{
        const {newsId,user,text}=req.body;
        const news=await News.findById(newsId);
        if(!news) return res.this.status(404).json({message:"News not found"});

        const comment={user,text,timestamp:new Date()};
        news.comment.push(comment);
        await news.save();
        res.status(201).json({message:"Server error",error});
    }
    catch(error){
        res.status(500).json({message:"Server error",error});
    }
};

export const getComments = async (req, res) => {
    try {
      const { newsId } = req.params;
      const news = await News.findById(newsId);
      if (!news) return res.status(404).json({ message: "News not found" });
  
      res.status(200).json(news.comments);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };