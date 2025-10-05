import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";
import { useAuth } from "./authContext";
const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchProjects = async () => {
    try {
      const response = await api.get("api/project");
      setProjects(response.data.data);
    } catch (error) {
      setError(
        error.message ||
          error.error ||
          "failed to load projects. try again later"
      );
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{ projects, isLoading, error, fetchProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within an projectProvider");
  }
  return context;
};
