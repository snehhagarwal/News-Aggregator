import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto p-8 bg-slate-800 text-slate-100 rounded-lg shadow-xl max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg leading-7 mb-6 text-center text-slate-300">
          Welcome to{" "}
          <span className="font-semibold text-purple-400">News Aggregator</span>! 
          We provide a centralized platform that curates the latest news from multiple 
          sources, helping you stay informed with real-time updates. Our goal is to deliver 
          accurate, relevant, and diverse news content in a seamless way.
        </p>
        <p className="text-lg leading-7 text-center text-slate-300">
          Whether you're looking for breaking news, trending topics, or in-depth analysis,{" "}
          <span className="font-semibold text-purple-400">News Aggregator</span> ensures 
          you get the best news experience without information overload.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Contributors
          </h2>
          <ul className="list-disc list-inside text-center space-y-4 text-slate-300">
            <li>
              Shiva Gaur -{" "}
              <a
                href="mailto:shivagaur2503@gmail.com"
                className="text-purple-400 hover:text-white"
              >
                shivagaur2503@gmail.com
              </a>
            </li>
            <li>
              Shubneet Kaur -{" "}
              <a
                href="mailto:shubneetkaur@gmail.com"
                className="text-purple-400 hover:text-white"
              >
                shubneetkaur@gmail.com
              </a>
            </li>
            <li>
              Seha Agarwal -{" "}
              <a
                href="mailto:sehaagarwal@gmail.com"
                className="text-purple-400 hover:text-white"
              >
                sehaagarwal@gmail.com
              </a>
            </li>
            <li>
              Harsh Bansal -{" "}
              <a
                href="mailto:harshbansal695@gmail.com"
                className="text-purple-400 hover:text-white"
              >
                harshbansal695@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
