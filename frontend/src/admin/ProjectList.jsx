import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/project");
        setProjects(response.data.data);
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
        await api.delete(`/api/project/${id}`);
        setProjects(projects.filter((project) => project._id !== id));
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to delete project");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center text-[#FAAD1B]">Loading projects...</div>
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
      <BackButton />
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6 text-[#FAAD1B]">Projects</h2>
        <button
          onClick={() => {
            navigate("/create");
          }}
        >
          create
        </button>
      </div>

      {projects.length === 0 ? (
        <p className="text-amber-50">No projects found.</p>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#0c0c0c] rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
            >
              {console.log(project.visible)}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-32 h-32 object-cover rounded-md"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#FAAD1B]">
                  {project.title}
                </h3>
                <p className="text-amber-50 mt-1">{project.description}</p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-[#FAAD1B]">
                    Categories:{" "}
                  </span>
                  <span className="text-sm text-amber-50">
                    {project.category.join(", ")}
                  </span>
                </div>
                <p className="text-amber-50 mt-1">
                  visible: {project.visible.toString()}
                </p>
              </div>
              <div className="flex space-x-2 self-end md:self-start">
                <button
                  onClick={() => navigate(`/update/${project._id}`)}
                  className="px-3 py-1 bg-[#22304C] text-[#FAAD1B] rounded-md hover:bg-[#FAAD1B] hover:text-[#0c0c0c]"
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
