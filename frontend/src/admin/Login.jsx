import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
// Login.jsx
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("please enter both email and password");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await api.post("/api/user/login", {
        email: email,
        password: password,
      });
      const { token, user } = response.data;
      login();
      localStorage.setItem("token", token);
      navigate("/admin");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      const message = error?.response?.data?.error || "login failed";
      setError(message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <BackButton to={" "} />
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form
        onSubmit={handleLogin}
        className="p-4 bg-gray-100 rounded-lg shadow"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {isLoading ? "Logging in" : "Login"}
        </button>
        <div className="mt-4 text-center">
          <button
            onClick={() => onLogin(false, "reset")}
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
