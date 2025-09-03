import React from "react";
import { Construction } from "lucide-react"; // you can swap icon if you like
import { Link } from "react-router-dom";

const UnderDevelopment = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <Construction size={64} className="text-third mb-4" />
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-primary dark:text-white">
        Page Under Development
      </h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6 text-sm sm:text-base">
        This page is currently under construction. Please check out other pages while we work on it. 🚀
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-third text-white rounded-lg hover:opacity-90 transition-all text-sm font-medium"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default UnderDevelopment;


