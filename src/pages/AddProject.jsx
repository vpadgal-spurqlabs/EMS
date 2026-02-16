// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProject } from "../features/project/projectSlice";
// import { useNavigate } from "react-router-dom";

// export default function AddProject(){
//     const dispatch =useDispatch();
//     const navigate =useNavigate();

//     const[fromData, setFromData]=useState({
//         employeeName:"",
//         projectTitle:"",
//         description:"",
//     });

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         dispatch(addProject(fromData));
//         navigate("/submit")
//     };
//     return (
//     <div className="max-w-xl mx-auto bg-white shadow-xl p-8 rounded-2xl">
//       <h2 className="text-2xl font-bold text-purple-700 mb-6">
//         Add Project Details
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           type="text"
//           placeholder="Employee Name"
//           className="w-full border p-3 rounded-lg"
//           onChange={(e) =>
//             setFormData({ ...formData, employeeName: e.target.value })
//           }
//         />

//         <input
//           type="text"
//           placeholder="Project Title"
//           className="w-full border p-3 rounded-lg"
//           onChange={(e) =>
//             setFormData({ ...formData, projectTitle: e.target.value })
//           }
//         />

//         <textarea
//           placeholder="Project Description"
//           className="w-full border p-3 rounded-lg"
//           rows="4"
//           onChange={(e) =>
//             setFormData({ ...formData, description: e.target.value })
//           }
//         />

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-800 transition"
//         >
//           Submit Project
//         </button>

//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../features/project/projectSlice";

export default function AddProject() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.list);

  const [formData, setFormData] = useState({
    employeeName: "",
    projectTitle: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.employeeName || !formData.projectTitle) return;

    dispatch(addProject(formData));

    // clear form after submit
    setFormData({
      employeeName: "",
      projectTitle: "",
      description: "",
    });
  };

  return (
    <div className="p-6">

     
      <div className="max-w-xl mx-auto bg-white shadow-xl p-8 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Add Project Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Employee Name"
            value={formData.employeeName}
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, employeeName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Project Title"
            value={formData.projectTitle}
            className="w-full border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({ ...formData, projectTitle: e.target.value })
            }
          />

          <textarea
            placeholder="Project Description"
            value={formData.description}
            className="w-full border p-3 rounded-lg"
            rows="4"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-800 transition"
          >
            Submit Project
          </button>

        </form>
      </div>

    
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-purple-700">
              {project.projectTitle}
            </h3>

            <p className="text-gray-600 mt-2">
              {project.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              By: {project.employeeName}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
