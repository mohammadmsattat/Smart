import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
// Css Import
import "./assets/scss/app.scss";

//import pages
import HomePage from "./pages/Home/HomePage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import ServicePage from "./pages/Services/ServicesPage";
import ServiceDetails from "./pages/Services/ServiceDetails";
import ComingSoon from "./pages/commingSoon/ComingSoon";
import TeamPage from "./pages/team/TeamPage";

import ProjectDetails from "./pages/projects/ProjectDetails";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import DarkModeBtn from "./component/darkModeBtn/DarkModeBtn";
import LogInPage from "./pages/Login/LogInPage";
import AdminAddPartnerPage from "./pages/Admin/partner/AdminAddPartner";
import AdminAddEmplyeePage from "./pages/Admin/Employees/AdminAddEmployee";
import AdminAddServicePage from "./pages/Admin/service/AdminAddService";
import AdminAddProjectPage from "./pages/Admin/project/AdminAddProject";
import AdminManegmentServicePage from "./pages/Admin/service/ManegmentService";
import AdminAddOfficePage from "./pages/Admin/office/AdminAddOffice";
import AdminManegmentProjectPage from "./pages/Admin/project/ManegmentProjects";
import AdminmanegmentEmployeePage from "./pages/Admin/Employees/AdminmanegmentEmployee";
import AdminManegmentPartnersPage from "./pages/Admin/partner/AdminmanegmentPartners";
import AdminManegmentOfficePage from "./pages/Admin/office/AdminmanegmentOffice";
import AdminEditProjectPage from "./pages/Admin/project/AdminEditProject";
import AdminEditServicePage from "./pages/Admin/service/AdminEditService";
import AdminEditEmployeePage from "./pages/Admin/Employees/AdminEditEmployee";
import AdminEditPartnerPage from "./pages/Admin/partner/AdminEditPartner";
import AdminEditOfficePage from "./pages/Admin/office/AdminEditOffice";
import BlogDetails from "./pages/Blog/BlogDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* {!hideHeaderPaths.includes(location.pathname) && <Header/>} */}
        <Header />
        <DarkModeBtn />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/portfolio"} element={<PortfolioPage />} />
          <Route path={"/aboutUs"} element={<AboutUsPage />} />
          <Route path={"/blog"} element={<BlogPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/service"} element={<ServicePage />} />
          <Route path={"/Blog-details"} element={<BlogDetails />} />

          <Route path={"/service/:id"} element={<ServiceDetails />} />
          <Route path={"/project/:id"} element={<ProjectDetails />} />
          <Route path={"/comingSoon"} element={<ComingSoon />} />
          <Route path={"/team"} element={<TeamPage />} />

          <Route
            path={"/admin/manegment-service"}
            element={<AdminManegmentServicePage />}
          />
          <Route
            path={"/admin/manegment-project"}
            element={<AdminManegmentProjectPage />}
          />
          <Route
            path={"/admin/manegment-employee"}
            element={<AdminmanegmentEmployeePage />}
          />
          <Route
            path={"/admin/manegment-partner"}
            element={<AdminManegmentPartnersPage />}
          />
          <Route
            path={"/admin/manegment-office"}
            element={<AdminManegmentOfficePage />}
          />
          <Route
            path={"/admin/edit-project/:id"}
            element={<AdminEditProjectPage />}
          />
          <Route
            path={"/admin/edit-service/:id"}
            element={<AdminEditServicePage />}
          />
          <Route
            path={"/admin/edit-employee/:id"}
            element={<AdminEditEmployeePage />}
          />
          <Route
            path={"/admin/edit-partner/:id"}
            element={<AdminEditPartnerPage />}
          />
          <Route
            path={"/admin/edit-office/:id"}
            element={<AdminEditOfficePage />}
          />
          <Route path={"/admin/addproject"} element={<AdminAddProjectPage />} />
          <Route path={"/admin/addpartner"} element={<AdminAddPartnerPage />} />
          <Route
            path={"/admin/addemployee"}
            element={<AdminAddEmplyeePage />}
          />
          <Route path={"/admin/addservice"} element={<AdminAddServicePage />} />
          <Route path={"/admin/addoffice"} element={<AdminAddOfficePage />} />

          <Route path={"/login"} element={<LogInPage />} />
        </Routes>
        <Footer parentClass="" />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
