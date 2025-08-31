import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
// ResetPassword.jsx
const ResetPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleResetPassword = async () => {
    // Simulate password reset email (replace with real API call in production)
    try {
      const response = await api.post("/api/user/reset-password", {
        email: email,
      });
      if (response.status == 200) {
        setMessage("reset link sent to email");
      }
    } catch (error) {
      setMessage(error?.response?.data?.error || "failed to send reset link");
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="w-full">
      <div className=" bg-[var(--gray)] w-full sm:w-[50] rounded-2xl mt-20 container mx-auto p-4 max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
        <form className="p-4 bg-[var*(--gray)] rounded-lg shadow">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-50 text-gray-50 rounded"
          />
          {message && (
            <p
              className={
                message.includes("sent")
                  ? "text-green-500 mb-2"
                  : "text-red-500 mb-2"
              }
            >
              {message}
            </p>
          )}
          <button
            onClick={handleResetPassword}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Reset Link
          </button>
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
