import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../features/project/projectSlice";

export default function Projects() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-red-500">{error}</h2>;

  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {list.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-lg rounded-xl p-6"
        >
          <h3 className="font-bold text-purple-700">
            {project.title}
          </h3>
          <p>{project.body}</p>
        </div>
      ))}
    </div>
  );
}
