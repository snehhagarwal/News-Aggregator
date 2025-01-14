import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto p-8 bg-slate-800 text-slate-100 rounded-lg shadow-xl max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg leading-7 text-slate-300 text-center mb-8">
          Have questions or suggestions? We’d love to hear from you! Reach out
          to us using the contact information or the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Contact Information
              </h2>
              <p className="text-slate-300">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:shivagaur2503@gmail.com"
                  className="text-purple-400 hover:underline"
                >
                  shivagaur2503@gmail.com
                </a>
              </p>
              <p className="text-slate-300">
                <strong>Phone:</strong>{" "}
                <a href="tel:+916395276297" className="text-purple-400 hover:underline">
                  +91 xxxxxxxxxx
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Contributors
              </h2>
              <ul className="space-y-2 text-slate-300">
                <li>Shiva Gaur</li>
                <li>Shubneet Kaur</li>
                <li>Seha Agarwal</li>
                <li>Harsh Bansal</li>
              </ul>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xqaklwjr"
            method="POST"
            className="bg-slate-700 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Send Us a Message
            </h2>
            <label className="block mb-4">
              <span className="block text-slate-300 font-semibold mb-2">
                Your Email:
              </span>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-slate-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500 bg-slate-800 text-white"
                placeholder="Enter your email"
              />
            </label>
            <label className="block mb-4">
              <span className="block text-slate-300 font-semibold mb-2">
                Your Message:
              </span>
              <textarea
                name="message"
                required
                className="w-full p-3 border border-slate-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500 bg-slate-800 text-white"
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
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

export default ContactUs;
