import React from "react";

// ICONS //
import { CiGlobe } from "react-icons/ci";
import { FaApple, FaTabletAlt } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
// ICONS //

const Platforms = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-700">Platform</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <CiGlobe/><span>Website</span>
          </p>
        </div>
        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">87</h1>
          <p className="flex items-center space-x-2">
            <FaApple/><span>IOS</span>
          </p>
        </div>
        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <DiAndroid/><span>Android</span>
          </p>
        </div>
        <div className="space-y-3 text-gray-500">
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
            <FaTabletAlt/><span>Tablet</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
