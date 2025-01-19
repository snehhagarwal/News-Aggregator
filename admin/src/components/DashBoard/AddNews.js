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

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageFile: null, // Updated for image upload
    country: "",
    category: "",
    date: "",
    time: "",
  });

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
      imageFile: e.target.files[0], // Handle image file
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-5 ml-80">
      <motion.div
        className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-blue-500 font-semibold text-center mb-6">
          Add News Article
        </h2>

        {/* News Title */}
        <div className="mb-6">
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

        {/* News Description */}
        <div className="mb-6">
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
            rows="4"
            className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* News Image Upload */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <label
              htmlFor="imageFile"
              className="text-lg text-white flex items-center"
            >
              <span className="text-yellow-400 text-4xl mr-3">🖼</span>
              Image Upload
            </label>
          </div>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* News Country */}
        <div className="mb-6">
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

        {/* News Category */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Tag className="text-4xl text-red-400 mr-3" />
            <label htmlFor="category" className="text-lg text-white">
              Category
            </label>
          </div>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category (e.g., Entertainment)"
            className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Date */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <DateRange className="text-4xl text-blue-400 mr-3" />
            <label htmlFor="date" className="text-lg text-white">
              Date
            </label>
          </div>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Time */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <DateRange className="text-4xl text-blue-400 mr-3" />
            <label htmlFor="time" className="text-lg text-white">
              Time
            </label>
          </div>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full py-4 text-xl bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none"
        >
          Submit News
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AddNews;
