import { FaPlus, FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({ toggleTheme, darkMode, openUpload }) => {
  return (
    <nav className="navbar flex items-center justify-between px-6 py-3 shadow-md bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Meme Board Logo"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />

        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          MemeBoard 😄
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={openUpload}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <FaPlus /> Upload
        </button>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg hover:opacity-80 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
