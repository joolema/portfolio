import { Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Home = lazy(() => import("./component/Home"));
const Head = lazy(() => import("./component/Head"));
const About = lazy(() => import("./component/About"));
const Services = lazy(() => import("./component/Services"));
const EducationWork = lazy(() => import("./component/EducationWork"));
const FavTool = lazy(() => import("./component/FavTool"));
const ContactUs = lazy(() => import("./component/ContactUs"));
const Projects = lazy(() => import("./component/Projects"));
// admin
const Login = lazy(() => import("./admin/Login"));
const CreateProjectForm = lazy(() => import("./admin/CreateProjectForm"));
const UpdateProjectForm = lazy(() => import("./admin/UpdateProjectForm"));
const ProjectList = lazy(() => import("./admin/ProjectList"));
const ChangePassword = lazy(() => import("./admin/ChangePassword"));
const ResetPassword = lazy(() => import("./admin/ResetPassword"));

const Portfolio = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-full">
          Loading...
        </div>
      }
    >
      <Head />
      <Home />
      <About />
      <Services />
      <EducationWork />
      <FavTool />
      <Projects />
      <ContactUs />
    </Suspense>
  );
};

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex text-amber-50 items-center justify-center h-screen w-full">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateProjectForm />} />
        <Route path="/update/:id" element={<UpdateProjectForm />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin" element={<ProjectList />} />
      </Routes>
    </Suspense>
  );
};

export default App;
