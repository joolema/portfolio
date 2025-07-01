import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectForm = ({ project, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: [""],
    image: "",
    visible: true,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || "",
        description: project.description || "",
        category: project.category.length > 0 ? project.category : [""],
        image: project.image || "",
        visible: project.visible !== undefined ? project.visible : true,
      });
    }
  }, [project]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    } else if (!/^[A-Za-z\s.,!?'-]*$/.test(formData.title)) {
      newErrors.title =
        "Title can only contain letters, spaces, and common punctuation";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 1000) {
      newErrors.description = "Description must be less than 1000 characters";
    } else if (!/^[A-Za-z\s.,!?'-]*$/.test(formData.description)) {
      newErrors.description =
        "Description can only contain letters, spaces, and common punctuation";
    }

    if (
      formData.category.length === 0 ||
      formData.category.every((cat) => !cat.trim())
    ) {
      newErrors.category = "At least one category is required";
    } else if (formData.category.some((cat) => cat.length > 50)) {
      newErrors.category = "Each category must be less than 50 characters";
    }

    if (formData.image && !/^(https?:\/\/)/i.test(formData.image)) {
      newErrors.image = "Image must be a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const dataToSend = {
        ...formData,
        category: formData.category.filter((cat) => cat.trim()),
      };

      if (project?._id) {
        // Update existing project
        await axios.put(`/api/projects/${project._id}`, dataToSend);
      } else {
        // Create new project
        await axios.post("/api/projects", dataToSend);
      }
      onSubmit();
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
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

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        {project ? "Update Project" : "Create Project"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Categories
          </label>
          {formData.category.map((cat, index) => (
            <div key={index} className="flex items-center mt-1">
              <input
                type="text"
                value={cat}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            className="mt-2 text-indigo-600 hover:text-indigo-800"
          >
            Add Category
          </button>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image URL (optional)
          </label>
          <input
            type="text"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-600">{errors.image}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.visible}
              onChange={(e) =>
                setFormData({ ...formData, visible: e.target.checked })
              }
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700">Visible</span>
          </label>
        </div>

        {errors.submit && (
          <p className="mb-4 text-sm text-red-600">{errors.submit}</p>
        )}

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-300"
          >
            {isSubmitting ? "Submitting..." : project ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
