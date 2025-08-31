import { useState, useEffect } from "react";
import api from "../api/api";
import BackButton from "../component/BackButton";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
const CreateProjectForm = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  //console.log("auth stat", isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const onCancel = () => {
    navigate("/admin");
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (imageFile.length === 0) {
      newErrors.image = "At least one image is required";
    } else {
      imageFile.forEach((file) => {
        if (!file.type.startsWith("image/")) {
          newErrors.image = "All files must be valid image types";
        } else if (file.size > 10 * 1024 * 1024) {
          newErrors.image = "Each image must be less than 10MB";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.filter((file) => file.type.startsWith("image/"));
    setImageFile(images);
    const previews = images.map((image) => URL.createObjectURL(image));
    setImagePreview(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const dataToSend = new FormData();
      dataToSend.append("title", formData.title);
      dataToSend.append("description", formData.description);
      dataToSend.append("category", formData.category);
      imageFile.forEach((file) => {
        dataToSend.append("images", file);
      });
      console.log("data sent on create ", dataToSend);
      await api.post("/api/project", dataToSend, {
        headers: {
          timeout: 30000,
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/admin");
    } catch (error) {
      setErrors({
        submit:
          error.response?.data?.error ||
          error.response?.data?.message ||
          "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#0c0c0c] rounded-lg shadow-md">
      <BackButton />
      <h2 className="text-2xl font-bold mb-6 text-[#FAAD1B]">Create Project</h2>

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

          <div className="flex items-center mt-1">
            <input
              type="text"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              placeholder="e.g. design, illustration..."
              className="block w-full rounded-md border-[#242424] bg-[#242424] text-white shadow-sm focus:border-[#22304C] focus:ring focus:ring-[#22304C] focus:ring-opacity-50"
            />
          </div>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-[#FAAD1B]">
            Image
          </label>

          <input
            type="file"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full rounded-md border-[#242424] bg-[#242424] text-white shadow-sm focus:border-[#22304C] focus:ring focus:ring-[#22304C] focus:ring-opacity-50"
          />
          <div className="preview">
            {imagePreview.map((preview, index) => (
              <img
                src={preview}
                key={index}
                className="w-32 h-32 object-cover rounded"
              />
            ))}
          </div>
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image}</p>
          )}
        </div>

        {errors.submit && (
          <p className="mb-4 text-sm text-red-600">{errors.submit}</p>
        )}

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-[#242424] rounded-md text-[#FAAD1B] hover:bg-[#22304C]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-[#22304C] text-[#FAAD1B] rounded-md hover:bg-[#FAAD1B] hover:text-[#0c0c0c] disabled:bg-[#242424]"
          >
            {isSubmitting ? "Submitting..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;
