    import React from 'react';
    import { Group, Report, TrendingUp } from '@mui/icons-material';
    import { motion } from 'framer-motion';
    import CountUp from 'react-countup';
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    const DashBoardHome = () => {
    const data = [
        { name: 'Mon', uv: 4000 },
        { name: 'Tue', uv: 3000 },
        { name: 'Wed', uv: 2000 },
        { name: 'Thu', uv: 2780 },
        { name: 'Fri', uv: 1890 },
        { name: 'Sat', uv: 2390 },
        { name: 'Sun', uv: 3490 },
    ];
    return (
        <div className="flex flex-col justify-center items-center h-screen p-5 bg-bg2">
        <div className="flex justify-center items-center gap-4 p-10 w-full">
            <motion.div 
            className="w-52 h-full rounded-lg bg-bg1 p-6 flex flex-col items-center justify-between shadow-lg"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            >
            <div className="flex items-center justify-center mb-4">
                <Group className="text-4xl text-white" />
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">Active Users</h3>
            <CountUp start={0} end={300} duration={2} delay={0}>
                {({ countUpRef }) => (
                <p ref={countUpRef} className="text-4xl text-white font-bold"></p>
                )}
            </CountUp>
            </motion.div>
            <motion.div 
            className="w-[30%] h-full rounded-lg bg-bg1 p-6 flex flex-col items-center justify-between shadow-lg"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            >
            <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-4xl text-white" />
            </div>
            <h3 className="text-xl text-white font-semibold mb-4">Trending News</h3>
            <p className="text-lg text-white">Breaking News: New Law Passed</p>
            </motion.div>
            <motion.div 
            className="w-[60%] h-full rounded-lg bg-bg1 p-6 shadow-lg flex flex-col items-center justify-between"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            >
            <div className="flex items-center justify-center mb-4">
                <Report className="text-4xl text-white" />
            </div>
            <h3 className="text-xl text-white font-semibold mb-4">News Stats</h3>
            <p className="text-lg text-white">Total News Articles: 350</p>
            <p className="text-lg text-white">Total Views: 1,500,000</p>
            </motion.div>

            <motion.div 
            className="w-[30%] h-full rounded-lg bg-bg1 p-6 shadow-lg flex flex-col items-center justify-between"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            >
            <div className="flex items-center justify-center mb-4">
                <Group className="text-4xl text-white" />
            </div>
            <h3 className="text-xl text-white font-semibold mb-4">Total Reports</h3>
            <p className="text-2xl text-white font-bold">1,000</p>
            </motion.div>
        
        <motion.div 
            className="w-[100%] h-[30%] rounded-lg bg-bg1 p-6 shadow-lg mt-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <h3 className="text-xl text-white font-semibold mb-4">Recent User Traffic</h3>
            <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#4DA1A9" />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </motion.div>
        </div>
        </div>
    );
    };

    export default DashBoardHome;
