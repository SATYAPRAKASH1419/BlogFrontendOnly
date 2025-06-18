import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const jwt = localStorage.getItem("token");

  return (
    <div className="border-b flex justify-between px-10 h-16 items-center">
      <Link to="/">
        <div className="font-bold text-2xl cursor-pointer">Medium</div>
      </Link>

      <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-600 hover:text-gray-900 font-medium transition duration-200">
          Home
        </a>
        <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition duration-200">
          About
        </a>
        <a href="/blogs" className="text-gray-600 hover:text-gray-900 font-medium transition duration-200">
          Blog
        </a>
        <a href="/contactus" className="text-gray-600 hover:text-gray-900 font-medium transition duration-200">
          Contact
        </a>
      </nav>

      {jwt ? (
        <div className="flex items-center gap-4">
          <Link to="/publish">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5"
            >
              New
            </button>
          </Link>
          <Avatar size="big" name="Satya" />
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <a href="/signin" className="text-gray-600 hover:text-gray-900 font-medium hidden sm:block">
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-gray-800 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-700 transition duration-200 shadow-md"
          >
            Get Started
          </a>
        </div>
      )}
    </div>
  );
};
