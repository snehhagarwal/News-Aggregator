import React, { useState } from "react";
import {
  Newspaper,
  Title,
  Description,
  DateRange,
  Language,
  Tag,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { adminVidPostAdd } from "../../../API/AdministratorLogin";

const AddNewsVid = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    videoFile: null,
    country: "",
    date: "",
    time: "",
    tags: [""],
    categories: [],
  });

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      videoFile: e.target.files[0],
    });
  };

  const handleTagChange = (e, index) => {
    const newTags = [...formData.tags];
    newTags[index] = e.target.value;
    setFormData({ ...formData, tags: newTags });
  };

  const addTag = () => {
    setFormData({ ...formData, tags: [...formData.tags, ""] });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData({ ...formData, videoFile: file });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const newCategories = checked
        ? [...prevFormData.categories, value]
        : prevFormData.categories.filter((category) => category !== value);
      return { ...prevFormData, categories: newCategories };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      id: `${id}`,
      author: formData.author,
      title: formData.title,
      country: formData.country,
      tags: formData.tags,
      categories: formData.categories,
      date: formData.date,
      time: formData.time,
      description: formData.description,
      videos: [],
    };

    try {
      const response = await adminVidPostAdd(dataToSubmit);
      if (response.data) {
        alert("News added successfully!");
      }
    } catch (error) {
      console.error("Error submitting news video:", error);
      alert("Failed to add news video");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 w-full min-h-screen p-8">
      <motion.div
        className="w-full max-w-4xl bg-gray-900 p-8 rounded-xl shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-blue-500 font-semibold text-center mb-6">
          Add News Video
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <Title className="text-4xl text-blue-500 mr-3" />
                <label htmlFor="title" className="text-lg text-white">
                  Author
                </label>
              </div>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter news author"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Title className="text-4xl text-blue-500 mr-3" />
                <label htmlFor="title" className="text-lg text-white">
                  Title
                </label>
              </div>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter news title"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Language className="text-4xl text-purple-400 mr-3" />
                <label htmlFor="country" className="text-lg text-white">
                  Country
                </label>
              </div>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Tag className="text-4xl text-red-400 mr-3" />
                <label className="text-lg text-white">Tags</label>
              </div>
              {formData.tags.map((tag, index) => (
                <div key={index} className="flex items-center space-x-3 mb-2">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => handleTagChange(e, index)}
                    placeholder={`Tag #${index + 1}`}
                    className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addTag}
                className="text-white mt-2 bg-blue-500 p-2 rounded-lg shadow-lg transform transition-all duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add Hashtag
              </button>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Newspaper className="text-4xl text-yellow-500 mr-3" />
                <label className="text-lg text-white">Categories</label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-800 rounded-lg p-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category}
                      name="categories"
                      value={category}
                      checked={formData.categories.includes(category)}
                      onChange={handleCategoryChange}
                      className="w-5 h-5 text-blue-500 border-gray-600 rounded"
                    />
                    <label htmlFor={category} className="ml-2 text-white">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <Description className="text-4xl text-green-500 mr-3" />
                <label htmlFor="description" className="text-lg text-white">
                  Description
                </label>
              </div>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter news description"
                rows="21"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <div
                className="w-full p-14 bg-gray-700 border-2 border-dashed border-gray-500 text-white rounded-lg text-center cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <p className="text-lg">Drag & Drop Video Here</p>
                <p className="text-sm text-gray-400">or</p>
                <input
                  type="file"
                  id="videoFile"
                  name="videoFile"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="videoFile"
                  className="text-blue-400 cursor-pointer"
                >
                  Choose a File
                </label>
              </div>

              {formData.videoFile && (
                <div className="w-full mt-4">
                  <video controls className="w-full h-auto rounded-lg">
                    <source
                      src={URL.createObjectURL(formData.videoFile)}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-4 text-xl bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mt-8"
        >
          Submit News Video
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AddNewsVid;
