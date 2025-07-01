import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Head from "./component/Head";
import About from "./component/About";
import Services from "./component/Services";
import EducationWork from "./component/EducationWork";
import FavTool from "./component/FavTool";
import ContactUs from "./component/ContactUs";
import Projects from "./component/Projects";
//admin
import Login from "./pages/admin/Login";
import ProjectForm from "./pages/admin/ProjectForm";
import ProjectList from "./pages/admin/ProjectList";
import ChangePassword from "./pages/admin/ChangePassword";
import ResetPassword from "./pages/admin/ResetPassword";
const Admin = () => {
  return (
    <>
      <Login />
      <ProjectForm />
      <ProjectList />
      <ChangePassword />
      <ResetPassword />
    </>
  );
};
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
