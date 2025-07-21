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
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
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
      const message = error?.response?.data?.error || "login failed";
      setError(message);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-around w-full min-h-screen ">
      <div className="w-[90%] h-auto">
        <div className="mb-10">
          <BackButton to={" "} />
        </div>

        <div className="  flex flex-col items-center justify-center container mx-auto p-4 max-w-md bg-[var(--gray)] rounded-2xl border border-amber-400 ">
          <h1 className="rounded-2xl text-3xl font-bold mb-6 text-center text-amber-50 w-[60%]">
            Login
          </h1>
          <form
            onSubmit={handleLogin}
            className="p-4 bg-[var(--gray)] rounded-lg shadow "
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-amber-50 border hover:border-[var(--orange)] border-amber-50 p-2 rounded mb-7"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-amber-50 hover:border-[var(--orange)] border-amber-50 w-full p-2 mb-7 border rounded"
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="w-full flex justify-center">
              <button className="w-1/2 bg-[var(--black)] text-[var(--orange)] px-4 py-2 rounded hover:bg-blue-900">
                {isLoading ? "Logging in" : "Login"}
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
    </div>
  );
};
export default Login;
