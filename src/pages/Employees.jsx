// import { useDispatch, useSelector } from "react-redux";
// import { addEmployee, deleteEmployee } from "../features/employee/employeeSlice";
// import { useState } from "react";
// import Card from "../components/Card";
// import Button from "../components/Button";
// import { addNotification } from "../features/notification/notificationSlice";


// export default function Employees() {
//   const employees = useSelector((state) => state.employees.list);
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
//   const [role, setRole] = useState("");

//   const handleAdd = () => {
//     if (!name || !role) return;

//     dispatch(
//       addEmployee({
//         name,
//         role,
//         status: "Active",
//       })
//     );
//     dispatch(addNotification(`New Employee ${name} added!`))

//     setName("");
//     setRole("");
//   };

//   return (
//     <Card>
//       <h2 className="text-2xl font-bold mb-6 text-purple-700">
//         Employee Management
//       </h2>

//       {/* Add Employee Form */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Employee Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border px-4 py-2 rounded-lg flex-1"
//         />

//         <input
//           type="text"
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="border px-4 py-2 rounded-lg flex-1"
//         />

//         <Button onClick={handleAdd}>Add</Button>
//       </div>

//       {/* Employee Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b">
//               <th className="py-2">Name</th>
//               <th>Role</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className="border-b hover:bg-gray-50">
//                 <td className="py-3">{emp.name}</td>
//                 <td>{emp.role}</td>
//                 <td className="text-green-600">{emp.status}</td>
//                 <td>
//                   <button
//                     onClick={() => dispatch(deleteEmployee(emp.id))}
//                     className="text-red-500 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Card>
//   );
// }


// import { useDispatch, useSelector } from "react-redux";
// import { addEmployee, deleteEmployee } from "../features/employee/employeeSlice";
// import { addNotification } from "../features/notification/notificationSlice";
// import { useState } from "react";
// import Card from "../components/Card";
// import Button from "../components/Button";

// export default function Employees() {
//   const employees = useSelector((state) => state.employees.list);
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
//   const [role, setRole] = useState("");

//   const handleAdd = () => {
//     if (!name || !role) return;

//     dispatch(
//       addEmployee({
//         name,
//         role,
//         status: "Active",
//       })
//     );

//     dispatch(addNotification(`New Employee ${name} added!`));

//     setName("");
//     setRole("");
//   };

//   const handleDelete = (id, empName) => {
//     dispatch(deleteEmployee(id));
//     dispatch(addNotification(`${empName} deleted successfully!`));
//   };

//   return (
//     <Card>
//       <h2 className="text-2xl font-bold mb-6 text-purple-700">
//         Employee Management
//       </h2>

//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Employee Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border px-4 py-2 rounded-lg flex-1"
//         />

//         <input
//           type="text"
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="border px-4 py-2 rounded-lg flex-1"
//         />

//         <Button onClick={handleAdd}>Add</Button>
//       </div>


//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b">
//               <th className="py-2">Name</th>
//               <th>Role</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className="border-b hover:bg-gray-50">
//                 <td className="py-3">{emp.name}</td>
//                 <td>{emp.role}</td>
//                 <td className="text-green-600">{emp.status}</td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(emp.id, emp.name)}
//                     className="text-red-500 hover:underline"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Card>
//   );
// }


import { useDispatch, useSelector } from "react-redux";
import { addEmployee, deleteEmployee } from "../features/employee/employeeSlice";
import { addNotification } from "../features/notification/notificationSlice";
import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Employees() {
  const employees = useSelector((state) => state.employees?.list || []);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleAdd = () => {
    if (!name || !role) return;

    dispatch(
      addEmployee({
        name, // can be string OR object
        role,
        status: "Active",
      })
    );

    dispatch(addNotification(`New Employee ${name} added!`));

    setName("");
    setRole("");
  };

  const handleDelete = (id, empName) => {
    dispatch(deleteEmployee(id));
    dispatch(addNotification(`${empName} deleted successfully!`));
  };

  // Helper to safely display name
  const renderName = (name) => {
    if (!name) return "N/A";

    if (typeof name === "object") {
      return `${name.firstname || ""} ${name.lastname || ""}`;
    }

    return name;
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">
        Employee Management
      </h2>

      {/* Add Employee Form */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded-lg flex-1"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-4 py-2 rounded-lg flex-1"
        />

        <Button onClick={handleAdd}>Add</Button>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{renderName(emp.name)}</td>
                  <td>{emp.role || "N/A"}</td>
                  <td className="text-green-600">
                    {emp.status || "Active"}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleDelete(emp.id, renderName(emp.name))
                      }
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500"
                >
                  No Employees Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}


