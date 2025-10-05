import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
import { useAuth } from "../context/authContext";
import { useProject } from "../context/projectContext";
import {
  PlusIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
const ProjectList = () => {
  const { projects, isLoading, error } = useProject();
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const token = localStorage.getItem("token");
        await api.delete(`/api/project/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
    <div className=" p-6 bg-[var(--black)] min-h-screen w-[100%]">
      <div className="flex justify-between">
        <BackButton to={" "} />
        <div className="w-fit flex justify-between items-center">
          <div className="flex justify-around items-center border-2 p-2 border-[var(--orange)] rounded-2xl">
            <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-2xl text-[var(--orange)]" />
            <button className="text-[var(--orange)] " onClick={handleLogout}>
              Logout
            </button>
          </div>
          <LockClosedIcon
            title="change password"
            className="text-[var(--orange)] rounded-full ml-4 w-7 h-7"
            onClick={() => navigate("/change")}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 w-[100%] rounded-2xl border border-amber-50 bg-[var(--gray)]  shadow-xl shadow-gray-500 ">
        <div className="flex justify-between border border-amber-50 p-4 rounded-3xl mb-5">
          <h1 className="text-[var(--orange)] text-2xl">
            List of all projects
          </h1>
          <div
            onClick={() => {
              navigate("/create");
            }}
            className="flex justify-around items-center p-2 rounded-2xl bg-[var(--orange)]"
          >
            <PlusIcon className="text-3xl h-5 w-5 text-[var(--black)]" />
            <button className="rounded-2xl bg-[var(--orange)]">create</button>
          </div>
        </div>

        {projects.length === 0 ? (
          <p className="text-amber-50">No projects found.</p>
        ) : (
          <div className="grid gap-4  ">
            {projects.map((project) => (
              <div
                key={project._id}
                className="border border-amber-50 bg-[#000000] rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
              >
                {project.image && (
                  <img
                    src={project.image.url}
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
                      Category:{" "}
                    </span>
                    <span className="text-sm text-amber-50">
                      {project.category}
                    </span>
                  </div>
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
    </div>
  );
};

export default ProjectList;
