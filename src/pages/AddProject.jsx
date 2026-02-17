import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProjectAsync } from "../features/project/projectSlice";

export default function AddProject() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state) => state.projects
  );

  const [formData, setFormData] = useState({
    employeeName: "",
    projectTitle: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.employeeName || !formData.projectTitle) {
      alert("Please fill all required fields");
      return;
    }

    // 🔥 Important: unwrap() lets us catch error directly
    try {
      await dispatch(addProjectAsync(formData)).unwrap();

      // Reset form only if success
      setFormData({
        employeeName: "",
        projectTitle: "",
        description: "",
      });

    } catch (err) {
      console.log("API Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* 🔴 SHOW API ERROR */}
      {error && (
        <div className="max-w-xl mx-auto mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center font-semibold">
          {error}
        </div>
      )}

      <div className="max-w-xl mx-auto bg-white shadow-2xl p-8 rounded-3xl">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Add Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Employee Name"
            value={formData.employeeName}
            className="w-full border p-3 rounded-xl"
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
            className="w-full border p-3 rounded-xl"
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
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold 
              ${loading 
                ? "bg-purple-400 cursor-not-allowed" 
                : "bg-purple-600 hover:bg-purple-800"}
            `}
          >
            {loading ? "Submitting..." : "Submit Project"}
          </button>

        </form>
      </div>
    </div>
  );
}
