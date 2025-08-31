import { useEffect, useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
// ChangePassword.jsx
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logout, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  const token = localStorage.getItem("token");
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match");
      return;
    }

    // password change
    setIsLoading(true);
    try {
      const response = await api.post(
        "/api/user/change-password",
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        setSuccess(response?.data?.message || "password changed successfully");
        logout();
        setError("");
      }
    } catch (error) {
      console.log("catch failed change ", error);
      setError(error?.response?.data?.message || "password change failed");
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 3000);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-[var(--black)] p-4">
      <div className="absolute left-10 top-10">
        <BackButton />
      </div>

      <div className="mt-20 sm:w-[50%] w-full rounded-2xl p-4 border border-[var(--orange)] shadow-2xl shadow-amber-500">
        <h1 className="text-2xl text-gray-50 font-bold mb-6 text-center">
          Change Password
        </h1>
        <form onSubmit={handleChangePassword} className="p-4 rounded-lg shadow">
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            required
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-50 text-gray-50 rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 mb-2 border rounded border-gray-50 text-gray-50"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mb-2 border rounded border-gray-50 text-gray-50"
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}
          <div className="flex gap-2">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {isLoading ? "Changing Password " : "Change Password"}
            </button>
          </div>
          <div className=" mt-4 text-right">
            <button
              onClick={() => navigate("/reset")}
              className="text-blue-500 hover:underline "
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
