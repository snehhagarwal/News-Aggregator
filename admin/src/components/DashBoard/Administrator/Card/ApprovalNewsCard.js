import React from 'react';
import { CheckCircle, Cancel } from '@mui/icons-material';
const ApprovalNewsCard = ({ news, onApprove, onReject }) => {
  return (
    <div className="w-96 bg-gray-800 text-white rounded-lg shadow-lg p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
        <p className="text-gray-300 mb-4">{news.description}</p>
        <p className="text-gray-400 text-sm">Published on: {news.date}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onApprove(news.id)}
          className="flex items-center gap-2 text-green-500 hover:text-green-400"
        >
          <CheckCircle />
          Approve
        </button>
        <button
          onClick={() => onReject(news.id)}
          className="flex items-center gap-2 text-red-500 hover:text-red-400"
        >
          <Cancel />
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApprovalNewsCard;
