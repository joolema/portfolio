import { useState, useEffect } from "react";
import BackButton from "../component/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "../context/authContext";

const UpdateProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: [""],
    visible: true,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) return;
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    const fetchProject = async () => {
      try {
        const response = await api.get(`/api/project/${id}`);
        const project = response.data.data;
        setFormData({
          title: project.title || "",
          description: project.description || "",
          category: project.category?.length > 0 ? project.category : [""],
          visible: project.visible || true,
        });
        setImagePreview(project.image || "");
        setIsLoading(false);
      } catch (error) {
        setErrors({
          fetch: error.response?.data?.message || "Failed to fetch project",
        });
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [id, isAuthenticated, isAuthLoading, navigate]);

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    } else if (!/^[A-Za-z0-9\s.,!?'-]*$/.test(formData.title)) {
      newErrors.title =
        "Title can only contain letters, numbers, spaces, and common punctuation";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 1000) {
      newErrors.description = "Description must be less than 1000 characters";
    } else if (!/^[A-Za-z0-9\s.,!?'-]*$/.test(formData.description)) {
      newErrors.description =
        "Description can only contain letters, numbers, spaces, and common punctuation";
    }

    if (
      formData.category.length === 0 ||
      formData.category.every((cat) => !cat.trim())
    ) {
      newErrors.category = "At least one category is required";
    } else if (formData.category.some((cat) => cat.length > 50)) {
      newErrors.category = "Each category must be less than 50 characters";
    }

    if (imageFile) {
      if (!imageFile.type.startsWith("image/")) {
        newErrors.image = "Please select a valid image file (e.g., .jpg, .png)";
      } else if (imageFile.size > 10 * 1024 * 1024) {
        newErrors.image = "Image file size must be less than 10MB";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file && file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(formData.image || "");
    }
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...formData.category];
    newCategories[index] = value;
    setFormData({ ...formData, category: newCategories });
  };

  const addCategory = () => {
    setFormData({ ...formData, category: [...formData.category, ""] });
  };

  const removeCategory = (index) => {
    if (formData.category.length > 1) {
      setFormData({
        ...formData,
        category: formData.category.filter((_, i) => i !== index),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({}); // Clear previous errors
    try {
      const dataToSend = new FormData();
      dataToSend.append("title", formData.title);
      dataToSend.append("description", formData.description);
      dataToSend.append("visible", formData.visible);
      formData.category
        .filter((cat) => cat.trim())
        .forEach((cat) => dataToSend.append("category[]", cat));
      if (imageFile) {
        dataToSend.append("image", imageFile);
      }
      const token = localStorage.getItem("token");
      console.log("Submitting with token:", token);
      console.log("FormData:", Object.fromEntries(dataToSend)); // For debugging
      const response = await api.patch(`/api/project/${id}`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          timeout: 30000,
        },
      });
      console.log("PATCH response:", response.data);
      navigate("/admin"); // Navigate to project list on success
    } catch (error) {
      console.error("PATCH request error:", error, error.response);
      setErrors({
        submit:
          error.response?.status === 401
            ? "Authentication failed. Please log in again."
            : Array.isArray(error.response?.data?.error)
            ? error.response.data.error.join(", ")
            : error.response?.data?.message || "Failed to update project",
      });
      if (error.response?.status === 401) {
        navigate("/login"); // Redirect to login on auth failure
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/admin"); // Navigate to project list on cancel
  };

  if (isAuthLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center text-[#FAAD1B]">
        Checking authentication...
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center text-[#FAAD1B]">
        Loading project...
      </div>
    );
  }

  if (errors.fetch) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center text-red-600">
        {errors.fetch}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#0c0c0c] rounded-lg shadow-md">
      <BackButton />
      <h2 className="text-2xl font-bold mb-6 text-[#FAAD1B]">Update Project</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#FAAD1B]">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-[#242424] bg-[#242424] text-white shadow-sm focus:border-[#22304C] focus:ring focus:ring-[#22304C] focus:ring-opacity-50"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#FAAD1B]">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
            className="mt-1 block w-full rounded-md border-[#242424] bg-[#242424] text-white shadow-sm focus:border-[#22304C] focus:ring focus:ring-[#22304C] focus:ring-opacity-50"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#FAAD1B]">
            Categories
          </label>
          {formData.category.map((cat, index) => (
            <div key={index} className="flex items-center mt-1">
              <input
                type="text"
                value={cat}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                placeholder="e.g. design, illustration..."
                className="block w-full rounded-md border-[#242424] bg-[#242424] text-white shadow-sm focus:border-[#22304C] focus:ring focus:ring-[#22304C] focus:ring-opacity-50"
              />
              {formData.category.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCategory(index)}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addCategory}
            className="mt-2 text-[#FAAD1B] hover:text-[#22304C]"
          >
            Add Category
          </button>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#FAAD1B]">
            Image
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 mb-2 max-w-xs"
            />
          )}
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full rounded-md border-[#242424] bg-[#242424] text-white shadow-sm focus:border-[#22304C] focus:ring focus:ring-[#22304C] focus:ring-opacity-50"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="flex items-center text-sm font-medium text-[#FAAD1B]">
            <input
              type="checkbox"
              id="visible"
              checked={formData.visible}
              onChange={(e) =>
                setFormData({ ...formData, visible: e.target.checked })
              }
              className="mr-2"
            />
            Visible
          </label>
        </div>

        {errors.submit && (
          <p className="mb-4 text-sm text-red-600">{errors.submit}</p>
        )}
        {isSubmitting && (
          <p className="mb-4 text-sm text-[#FAAD1B]">Submitting...</p>
        )}

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-[#242424] rounded-md text-[#FAAD1B] hover:bg-[#22304C]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-[#22304C] text-[#FAAD1B] rounded-md hover:bg-[#FAAD1B] hover:text-[#0c0c0c] disabled:bg-[#242424]"
          >
            {isSubmitting ? "Submitting..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProjectForm;
