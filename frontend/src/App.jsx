import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/Home";
import Head from "./component/Head";
import About from "./component/About";
import Services from "./component/Services";
import EducationWork from "./component/EducationWork";
import FavTool from "./component/FavTool";
import ContactUs from "./component/ContactUs";
import Projects from "./component/Projects";
// admin
import Login from "./admin/Login";
import CreateProjectForm from "./admin/CreateProjectForm";
import UpdateProjectForm from "./admin/UpdateProjectForm";
import ProjectList from "./admin/ProjectList";
import ChangePassword from "./admin/ChangePassword";
import ResetPassword from "./admin/ResetPassword";

const Portfolio = () => {
  return (
    <>
      <Head />
      <Home />
      <About />
      <Services />
      <EducationWork />
      <FavTool />
      <Projects />
      <ContactUs />
    </>
  );
};

const App = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/admin");
  const handleCancel = () => navigate("/admin");

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/create"
        element={
          <CreateProjectForm onSubmit={handleSubmit} onCancel={handleCancel} />
        }
      />
      <Route
        path="/update/:id"
        element={
          <UpdateProjectForm onSubmit={handleSubmit} onCancel={handleCancel} />
        }
      />
      <Route path="/change" element={<ChangePassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/admin" element={<ProjectList />} />
    </Routes>
  );
};

export default App;
