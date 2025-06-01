import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 text-black bg-white bg-opacity-80 p-4 rounded">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-sm font-semibold flex items-center gap-2 opacity-90">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-sm font-semibold opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
