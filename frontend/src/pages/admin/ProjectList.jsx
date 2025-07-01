import { useState, useEffect } from "react";
import api from "..";

const ProjectList = ({ onEdit }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch projects");
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`/api/projects/${id}`);
        setProjects(projects.filter((project) => project._id !== id));
      } catch (err) {
        setError(err.response?.data?.message || "Failed to delete project");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-red-600 text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-600">No projects found.</p>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-32 h-32 object-cover rounded-md"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-700">
                    Categories:{" "}
                  </span>
                  <span className="text-sm text-gray-600">
                    {project.category.join(", ")}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-700">
                    Status:{" "}
                  </span>
                  <span
                    className={`text-sm ${
                      project.visible ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {project.visible ? "Visible" : "Hidden"}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2 self-end md:self-start">
                <button
                  onClick={() => onEdit(project)}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
