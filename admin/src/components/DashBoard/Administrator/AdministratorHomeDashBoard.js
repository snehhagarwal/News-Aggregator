import React from "react";
import { Group, Report, TrendingUp } from "@mui/icons-material";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdministratorHomeDashBoard = () => {
  const data = [
    { name: "Mon", uv: 4000 },
    { name: "Tue", uv: 3000 },
    { name: "Wed", uv: 2000 },
    { name: "Thu", uv: 2780 },
    { name: "Fri", uv: 1890 },
    { name: "Sat", uv: 2390 },
    { name: "Sun", uv: 3490 },
  ];

  return (
    <div className="flex flex-col items-center h-screen p-5 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <motion.div
          className="w-[25vw] rounded-lg h-[16rem] bg-gray-800 p-6 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Group fontSize="large" className="text-8xl text-blue-400" />
          </div>
          <h3 className="text-xl text-white font-semibold">
            Live Active Users
          </h3>
          <CountUp start={0} end={300} duration={2}>
            {({ countUpRef }) => (
              <p
                ref={countUpRef}
                className="text-5xl text-blue-400 font-bold"
              ></p>
            )}
          </CountUp>
        </motion.div>

        <motion.div
          className="w-[25vw] rounded-lg bg-gray-800 h-[16rem] p-6 shadow-lg flex flex-col items-center justify-between hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Report fontSize="large" className="text-8xl text-red-400" />
          </div>
          <h3 className="text-xl text-white font-semibold">Total Reports</h3>
          <CountUp start={0} end={1000} duration={2}>
            {({ countUpRef }) => (
              <p
                ref={countUpRef}
                className="text-5xl text-red-400 font-bold"
              ></p>
            )}
          </CountUp>
        </motion.div>

        <motion.div
          className="w-[25vw] rounded-lg h-[16rem] bg-gray-800 p-6 flex flex-col items-center justify-between shadow-lg hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center mb-4">
            <TrendingUp fontSize="large" className="text-8xl text-green-400" />
          </div>
          <p className="text-lg text-white">Breaking News</p>
          <motion.p
            className="text-3xl text-center text-green-400 font-bold"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            News Lorem
          </motion.p>
        </motion.div>
        <motion.div
          className="w-[25vw] mt-4 rounded-lg h-[24rem] bg-gray-800 p-6 shadow-lg flex flex-col items-center justify-between hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <NewspaperIcon
              fontSize="large"
              className="text-8xl text-yellow-400"
            />
          </div>
          <p className="text-lg text-white">Total News Articles:</p>
          <CountUp start={0} end={350} duration={2}>
            {({ countUpRef }) => (
              <p
                ref={countUpRef}
                className="text-5xl text-yellow-400 font-bold"
              ></p>
            )}
          </CountUp>
          <p className="text-lg text-white mt-2">Total Views:</p>
          <CountUp start={0} end={150000} duration={2}>
            {({ countUpRef }) => (
              <p
                ref={countUpRef}
                className="text-5xl text-yellow-400 font-bold"
              ></p>
            )}
          </CountUp>
        </motion.div>
        <motion.div
          className="w-[51vw] mt-4 h-[24rem] rounded-lg bg-gray-800 p-6 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-95 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl text-blue-400 font-semibold mb-4">
            Recent User Traffic
          </h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ddd" />
                <YAxis stroke="#ddd" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdministratorHomeDashBoard;
