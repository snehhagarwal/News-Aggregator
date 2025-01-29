import News from "../Models/news.js";
export const getNewsData = async (req, res) => {
  try {
    let news = await News.findOne({ name: "news" });
    if (!news) {
      return res.status(404).json({ message: "news not found" });
    }
    return res
      .status(200)
      .json({ message: "Fetched Successfully", news: news });
  } catch (error) {
    return res.status(500).json({ message: "Some error occurred" });
  }
};
