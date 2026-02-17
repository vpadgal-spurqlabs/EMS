import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProjectAsync } from "../features/project/projectSlice";

export default function AddProject() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(
    (state) => state.projects
  );

  const [formData, setFormData] = useState({
    employeeName: "",
    projectTitle: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.employeeName || !formData.projectTitle) return;

    dispatch(addProjectAsync(formData));

    setFormData({
      employeeName: "",
      projectTitle: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* FORM */}
      <div className="max-w-xl mx-auto bg-white shadow-2xl p-8 rounded-3xl mb-10">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Add Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Employee Name"
            value={formData.employeeName}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                employeeName: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Project Title"
            value={formData.projectTitle}
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                projectTitle: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Project Description"
            value={formData.description}
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-800 transition"
          >
            {loading ? "Submitting..." : "Submit Project"}
          </button>

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
        </form>
      </div>

      {/* PROJECT LIST */}
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-bold text-purple-700">
              {project.projectTitle || project.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {project.description || project.body}
            </p>

            {project.employeeName && (
              <p className="mt-4 text-sm text-gray-500">
                By: {project.employeeName}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addProjectAsync } from "../features/project/projectSlice";

// export default function AddProject() {
//   const dispatch = useDispatch();
//   const { list, loading, error } = useSelector(
//     (state) => state.projects
//   );

//   {loading && <p>Loading...</p>}
// {error && <p style={{color:"red"}}>{error}</p>}


//   const [formData, setFormData] = useState({
//     employeeName: "",
//     projectTitle: "",
//     description: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.employeeName || !formData.projectTitle) return;

//     dispatch(addProjectAsync(formData));

//     setFormData({
//       employeeName: "",
//       projectTitle: "",
//       description: "",
//     });
//   };

//   return (
//     <div className="p-6">

//       {/* Form */}
//       <div className="max-w-xl mx-auto bg-white shadow-xl p-8 rounded-2xl mb-10">
//         <h2 className="text-2xl font-bold text-purple-700 mb-6">
//           Add Project Details
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Employee Name"
//             value={formData.employeeName}
//             className="w-full border p-3 rounded-lg"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 employeeName: e.target.value,
//               })
//             }
//           />

//           <input
//             type="text"
//             placeholder="Project Title"
//             value={formData.projectTitle}
//             className="w-full border p-3 rounded-lg"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 projectTitle: e.target.value,
//               })
//             }
//           />

//           <textarea
//             placeholder="Project Description"
//             value={formData.description}
//             className="w-full border p-3 rounded-lg"
//             rows="4"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description: e.target.value,
//               })
//             }
//           />

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-800 transition"
//           >
//             {loading ? "Submitting..." : "Submit Project"}
//           </button>

//           {error && (
//             <p className="text-red-500 mt-2">{error}</p>
//           )}
//         </form>
//       </div>

//       {/* Project Cards */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {list.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition"
//           >
//             <h3 className="text-xl font-bold text-purple-700">
//               {project.projectTitle}
//             </h3>

//             <p className="text-gray-600 mt-2">
//               {project.description}
//             </p>

//             <p className="mt-4 text-sm text-gray-500">
//               By: {project.employeeName}
//             </p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
