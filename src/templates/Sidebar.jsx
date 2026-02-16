import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-gradient-to-b from-white to-purple-700 shadow-lg p-6 flex flex-col">
      
      <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">
        EMS
      </h2>

      <nav className="space-y-4 flex-1">

        <Link
          to="/"
          className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
        >
          Home
        </Link>

        {/* Other Links */}
        <Link
          to="/employees"
          className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
        >
          Employees
        </Link>

        <Link
          to="/about"
          className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
        >
          About
        </Link>

        <Link
          to="/add-project"
          className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
        >
          Project
        </Link>

      </nav>

      <Link
        to="/submit"
        className="block text-center mt-6 px-4 py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-200 transition"
      >
        SUBMIT
      </Link>

    </div>
  );
}
