import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="loader-wrapper flex items-center justify-center h-screen ">
      <div className="loader loader-1">
        <div className="loader-outter" />
        <div className="loader-inner" />
        <div className="loader-inner-1" />
      </div>
    </div>
  </div>
  );
};

export default Loading;