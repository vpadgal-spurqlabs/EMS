// export default function Header() {
//   return (
//     <header className="h-16 bg-gradient-to-r from-white to-purple-700 flex items-center justify-between px-8 shadow-md">
      
//       <h1 className="text-xl font-bold text-purple-800">
//         Employee Dashboard
//       </h1>

//       <input
//         type="text"
//         placeholder="Search..."
//         className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//       />
//     </header>
//   );
// }



import { useDispatch } from "react-redux";
import { setSearch } from "../features/employee/employeeSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="h-16 bg-gradient-to-r from-white to-purple-700 flex items-center justify-between px-8 shadow-md">
      <h1 className="text-xl font-bold text-purple-800">
        Employee Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search employee..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    </header>
  );
}
