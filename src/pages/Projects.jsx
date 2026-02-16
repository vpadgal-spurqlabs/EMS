import { useSelector } from "react-redux";

export default function Projects() {
  const projects = useSelector((state) => state.projects.list);

  return (
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
  );
}
