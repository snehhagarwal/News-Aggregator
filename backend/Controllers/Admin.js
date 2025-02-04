import News from "../Models/news.js";
export const loginAdmin = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ message: "ID and password are required" });
    }
    try {
        const news = await News.findOne({ "administrator.id": name });
        if (!news) {
            return res.status(404).json({ message: "Admin not found" });
        }
        const admin = news.administrator.find((admin) => admin.id === name);
        if (admin.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const out=[];
        out.push(admin.approvedNews);
        out.push(admin.approvedNewsVid);
        out.push(admin.nonApprovedNews);
        out.push(admin.nonApprovedNewsVid);
        out.push(admin.reporters);
        res.status(200).json({ message: "Login successful", out });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
export const adminPostAdd = async (req, res) => {
    try {
      const { id,author, title, country, tags, categories, date, time, description, images } = req.body;
      if (!id || !author|| !title || !country || !description) {
        return res.status(400).json({ message: "Admin ID, title, country, and description are required fields." });
      }
      if (!Array.isArray(tags) || !Array.isArray(categories) || (images && !Array.isArray(images))) {
        return res.status(400).json({ message: "Tags, categories, and images should be arrays." });
      }
      const out=await News.findOne({"name":"news"});
      const news = await News.findOne({ "administrator.id": id });
      if (!news) {
        return res.status(404).json({ message: "Admin not found" });
      }
      const admin = news.administrator.find((admin) => admin.id === id);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found in the record" });
      }
      const newsData = {
        author,
        title,
        country,
        tags,
        categories,
        date: date || new Date().toISOString(),
        time: time || new Date().toTimeString(),
        description,
        images: images || [],
        comments:[],
        likes:0,
        approvedBy:id,
      };
      admin.approvedNews.push(newsData);
      out.approvedNews.push(newsData);   
    console.log(out.approvedNews);
      await news.save();
      await out.save();
      res.status(201).json({ message: "News added successfully!", data: newsData });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  
export const adminVidPostAdd = async (req, res) => {
    try {
        const { id,author, title, country, tags, categories, date, time, description, videos } = req.body;
        if (!id || !author || !title || !country || !description) {
            return res.status(400).json({ message: "Admin ID, title, country, and description are required fields." });
        }
        if (!Array.isArray(tags) || !Array.isArray(categories) || !Array.isArray(videos)) {
            return res.status(400).json({ message: "Tags, categories, and videos should be arrays." });
        }
        const news = await News.findOne({ "administrator.id": id });
        if (!news) {
            return res.status(404).json({ message: "Admin not found" });
        }
        const admin = news.administrator.find((admin) => admin.id === id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found in the record" });
        }
        const newsData = {
            author,
            title,
            country,
            tags,
            categories,
            date: date || new Date().toISOString(),
            time: time || new Date().toTimeString(),
            description,
            videos: videos || [],
        };
        admin.approvedNewsVid.push(newsData);
        await news.save();
        res.status(201).json({ message: "News added successfully!", data: newsData });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
export const addReporter=async(req,res)=>{
    const{id,password,name,nonApprovedNews,approveNews,nonApproveVideo,approvedVideo}=req.body;
    
}



























export const approveNews = async (req, res) => {
    try {
        const { id, newsId } = req.body;
        if (!id || !newsId) {
            return res.status(400).json({ message: "Admin ID and news ID are required." });
        }
        const news = await News.findOne({ "administrator.id": id });
        if (!news) {
            return res.status(404).json({ message: "Admin not found." });
        }

        const admin = news.administrator.find((admin) => admin.id === id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found in the record." });
        }
        const newsItemIndex = admin.nonApprovedNews.findIndex((newsItem) => newsItem.id === newsId);
        if (newsItemIndex === -1) {
            return res.status(404).json({ message: "News not found in non-approved news." });
        }
        const [approvedNewsItem] = admin.nonApprovedNews.splice(newsItemIndex, 1);
        admin.approvedNews.push(approvedNewsItem);
        admin.nonApprovedNews = admin.nonApprovedNews.filter((newsItem) => newsItem.id !== newsId);
        await news.save();
        res.status(200).json({ message: "News approved successfully!", data: approvedNewsItem });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export const approveNewsVid = async (req, res) => {
    try {
        const { id, videoId } = req.body;

        if (!id || !videoId) {
            return res.status(400).json({ message: "Admin ID and video ID are required." });
        }

        const news = await News.findOne({ "administrator.id": id });
        if (!news) {
            return res.status(404).json({ message: "Admin not found." });
        }

        const admin = news.administrator.find((admin) => admin.id === id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found in the record." });
        }

        const videoItemIndex = admin.nonApprovedNewsVid.findIndex((videoItem) => videoItem.id === videoId);
        if (videoItemIndex === -1) {
            return res.status(404).json({ message: "Video not found in non-approved videos." });
        }

        const [approvedVideoItem] = admin.nonApprovedNewsVid.splice(videoItemIndex, 1);
        admin.approvedNewsVid.push(approvedVideoItem);
        admin.nonApprovedNewsVid = admin.nonApprovedNewsVid.filter((videoItem) => videoItem.id !== videoId);

        await news.save();
        res.status(200).json({ message: "Video approved successfully!", data: approvedVideoItem });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
