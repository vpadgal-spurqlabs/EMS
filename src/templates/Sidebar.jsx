// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="w-60 min-h-screen bg-gradient-to-b from-white to-purple-700 shadow-lg p-6 flex flex-col">
      
//       <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">
//         EMS
//       </h2>

//       <nav className="space-y-4 flex-1">
        
//         <Link
//           to="/"
//           className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
//         >
//           Home
//         </Link>

//         <Link
//           to="/employees"
//           className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
//         >
//           Employees
//         </Link>

//         <Link
//           to="/about"
//           className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
//         >
//           About
//         </Link>
//         <Link
//           to="/add-project"
//           className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
//         >
//           Project
//         </Link>

//       </nav>

//       {/* Bottom Button */}
//       <Link
//         to="/submit"
//         className="block text-center mt-6 px-4 py-2 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-200 transition"
//       >
//         SUBMIT
//       </Link>

//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [openHome, setOpenHome] = useState(false);

  return (
    <div className="w-60 min-h-screen bg-gradient-to-b from-white to-purple-700 shadow-lg p-6 flex flex-col">
      
      <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">
        EMS
      </h2>

      <nav className="space-y-4 flex-1">

        {/* Home with Dropdown */}
        <div>
          <button
            onClick={() => setOpenHome(!openHome)}
            className="w-full text-left px-4 py-2 rounded-lg text-gray-800 hover:bg-white hover:text-purple-900 transition"
          >
            Home
          </button>

          {openHome && (
            <div className="ml-6 mt-2 space-y-2 text-sm">
              <Link
                to="/"
                className="block text-gray-700 hover:text-purple-900"
              >
                Main Home
              </Link>

              <Link
                to="/gallery"
                className="block text-gray-700 hover:text-purple-900"
              >
                Our Gallery
              </Link>

              <Link
                to="/contact"
                className="block text-gray-700 hover:text-purple-900"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>

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
