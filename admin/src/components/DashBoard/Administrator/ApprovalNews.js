import React, { useState } from 'react';
import { Typography } from '@mui/material';
import ApprovalNewsCard from './Card/ApprovalNewsCard';

const newsData = [
  { id: 1, title: 'Breaking News: Market Crash', description: 'The stock market witnessed a significant crash today...', date: '2025-01-20' },
  { id: 2, title: 'Sports Update: Football Finals', description: 'The finals of the national football league are scheduled for...', date: '2025-01-21' },
  { id: 3, title: 'Weather Alert: Heavy Rainfall', description: 'A heavy rainfall alert has been issued in coastal regions...', date: '2025-01-22' },
];
const ApprovalNews = () => {
  const [newsList, setNewsList] = useState(newsData);
  const handleApprove = (id) => {
    setNewsList(newsList.filter((news) => news.id !== id));
    alert(`News ID: ${id} has been approved.`);
  };

  const handleReject = (id) => {
    setNewsList(newsList.filter((news) => news.id !== id));
    alert(`News ID: ${id} has been rejected.`);
  };

  return (
    <div className="flex flex-col items-center h-screen p-5 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className='text-blue-500 text-5xl mb-12 mt-4'>
        Approve or Reject News Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {newsList.map((news) => (
          <ApprovalNewsCard
            key={news.id}
            news={news}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ))}
      </div>
    </div>
  );
};

export default ApprovalNews;
