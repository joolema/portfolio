import { useState } from "react";
// ResetPassword.jsx
const ResetPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = () => {
    // Simulate password reset email (replace with real API call in production)
    if (email === "admin@example.com") {
      setMessage("Password reset link sent to your email!");
      setTimeout(() => {
        setMessage("");
        onBack();
      }, 2000);
    } else {
      setMessage("Email not found");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
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
          <button onClick={onBack} className="text-blue-500 hover:underline">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
