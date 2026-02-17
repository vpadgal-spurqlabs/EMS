import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../features/project/projectSlice";

export default function Projects() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <h2 className="text-center text-red-500 mt-10">
        {error}
      </h2>
    );

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {list.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-xl rounded-2xl p-6"
        >
          <h3 className="font-bold text-purple-700">
            {project.title}
          </h3>
          <p className="mt-2 text-gray-600">
            {project.body}
          </p>
        </div>
      ))}
    </div>
  );
}
