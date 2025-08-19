import React from "react";
import { ArrowRight } from "lucide-react";
import img from "../assets/formpic.png";

const From = () => {
  return (
    <div className="w-full min-h-[90vh] px-4 py-10  sm:px-8 lg:px-20 flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={img}
            alt="Consultation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left mb-6">
            Connect With Your Next Great Hire Today!
          </h1>
          <p className="text-center lg:text-left text-gray-600 mb-8">
            Fill out the form below and our team will get back to you shortly.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-5">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                required
              />
            </div>

            {/* Your Name */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                required
              />
            </div>

            {/* Phone Number (optional) */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                required
              />
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Project Details
              </label>
              <textarea
                placeholder="Describe your project..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none min-h-[120px]"
                required
              ></textarea>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 w-4 h-4" required />
              <p className="text-sm text-gray-600">
                By checking this box I confirm that I have read and accept the{" "}
                <a
                  href="/privacy-policy"
                  className="text-secondary font-medium hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg bg-secondary text-white hover:bg-primary transition-all duration-300 text-sm sm:text-base"
            >
              GET CONSULTATION <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default From;
