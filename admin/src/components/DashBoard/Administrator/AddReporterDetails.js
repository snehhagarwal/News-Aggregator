// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Person, Email, Phone } from "@mui/icons-material";

// const AddReporter = ({ userRole }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     role: "Reporter",
//   });
//   if (userRole !== "admin") {
//     return <div>You do not have permission to add reporters.</div>;
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.contactNumber) {
//       alert("Please fill in all fields.");
//       return;
//     }
//     console.log("Reporter details submitted:", formData);
//     setFormData({ name: "", email: "", contactNumber: "", role: "Reporter" });
//   };

//   return (
//     <div className="flex flex-col items-center bg-gray-900 justify-center w-full p-5">
//       <motion.div
//         className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-2xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl text-blue-500 font-semibold text-center mb-6">
//           Add Reporter Details
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {/* Reporter Name */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <Person className="text-4xl text-blue-500 mr-3" />
//               <label htmlFor="name" className="text-lg text-white">
//                 Name
//               </label>
//             </div>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter reporter name"
//               className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Reporter Email */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <Email className="text-4xl text-green-500 mr-3" />
//               <label htmlFor="email" className="text-lg text-white">
//                 Email
//               </label>
//             </div>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter reporter email"
//               className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>

//           {/* Contact Number */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <Phone className="text-4xl text-yellow-400 mr-3" />
//               <label htmlFor="contactNumber" className="text-lg text-white">
//                 Contact Number
//               </label>
//             </div>
//             <input
//               type="text"
//               id="contactNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               placeholder="Enter contact number"
//               className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             className="w-full py-4 text-xl bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none"
//           >
//             Add Reporter
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default AddReporter;
