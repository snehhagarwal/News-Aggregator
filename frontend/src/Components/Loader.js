import React from "react";
const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-4 border-blue-700 rounded-full animate-pulseCircle"></div>
        <div className="absolute inset-3 border-4 border-blue-600 rounded-full animate-pulseCircle [animation-delay:0.2s]"></div>
        <div className="absolute inset-5 border-4 border-blue-500 rounded-full animate-pulseCircle [animation-delay:0.4s]"></div>
        <div className="absolute inset-7 border-4 border-blue-400 rounded-full animate-pulseCircle [animation-delay:0.6s]"></div>
        <div className="absolute inset-9 border-4 border-blue-300 rounded-full animate-pulseCircle [animation-delay:0.8s]"></div>
        <div className="absolute inset-11 border-4 border-blue-200 rounded-full animate-pulseCircle [animation-delay:1s]"></div>
      </div>
    </div>
  );
};
export default LoadingAnimation;
