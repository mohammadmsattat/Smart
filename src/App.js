import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Css Import
import "./assets/scss/app.scss";

//global component
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import DarkModeBtn from "./component/darkModeBtn/DarkModeBtn";

//import pages
import HomePage from "./pages/Home/HomePage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import ServicePage from "./pages/Services/ServicesPage";
import ComingSoon from "./pages/commingSoon/ComingSoon";
import TeamPage from "./pages/team/TeamPage";
import BlogDetails from "./pages/Blog/BlogDetails";
import ServiceDetails from "./pages/Services/ServiceDetails";
import ProjectDetails from "./pages/projects/ProjectDetails";

//import admin pages
import LogInPage from "./pages/Login/LogInPage";
import AdminInformatioPage from "./pages/Admin/OurInformations/AdminInformations";
import AdminManegmentProjectPage from "./pages/Admin/project/ManegmentProjects";
import AdminmanegmentEmployeePage from "./pages/Admin/Employees/AdminmanegmentEmployee";
import AdminManegmentPartnersPage from "./pages/Admin/partner/AdminmanegmentPartners";
import AdminManegmentOfficePage from "./pages/Admin/office/AdminmanegmentOffice";
import AdminManegmentServicePage from "./pages/Admin/service/ManegmentService";
import AdminmanegmentBlogsPage from "./pages/Admin/Blog/AdminManegmentBlogs";
import AdminAddPartnerPage from "./pages/Admin/partner/AdminAddPartner";
import AdminAddEmplyeePage from "./pages/Admin/Employees/AdminAddEmployee";
import AdminAddServicePage from "./pages/Admin/service/AdminAddService";
import AdminAddProjectPage from "./pages/Admin/project/AdminAddProject";
import AdminAddOfficePage from "./pages/Admin/office/AdminAddOffice";
import AdminAddBlogPage from "./pages/Admin/Blog/AdminAddBlog";
import AdminEditProjectPage from "./pages/Admin/project/AdminEditProject";
import AdminEditServicePage from "./pages/Admin/service/AdminEditService";
import AdminEditEmployeePage from "./pages/Admin/Employees/AdminEditEmployee";
import AdminEditPartnerPage from "./pages/Admin/partner/AdminEditPartner";
import AdminEditOfficePage from "./pages/Admin/office/AdminEditOffice";
import AdminEditBlogPage from "./pages/Admin/Blog/AdminEditBlogs";
import ProtectedRoute from "./component/Protect-Route/ProtectRoute";

const App = () => {

  return (
    <BrowserRouter>
    		<ScrollToTop>

        <Header />
        <DarkModeBtn />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/portfolio"} element={<PortfolioPage />} />
          <Route path={"/aboutUs"} element={<AboutUsPage />} />
          <Route path={"/blog"} element={<BlogPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/service"} element={<ServicePage />} />
          <Route path={"/Blog-details/:id"} element={<BlogDetails />} />

          <Route path={"/service/:id"} element={<ServiceDetails />} />
          <Route path={"/project/:id"} element={<ProjectDetails />} />
          <Route path={"/comingSoon"} element={<ComingSoon />} />
          <Route path={"/team"} element={<TeamPage />} />

          <Route element={<ProtectedRoute />}>
          <Route
              path={"/admin/manegment-information"}
              element={<AdminInformatioPage />}
            />
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
            <Route
              path={"/admin/add-project"}
              element={<AdminAddProjectPage />}
            />
            <Route
              path={"/admin/add-partner"}
              element={<AdminAddPartnerPage />}
            />
            <Route
              path={"/admin/add-employee"}
              element={<AdminAddEmplyeePage />}
            />
            <Route
              path={"/admin/add-service"}
              element={<AdminAddServicePage />}
            />
            <Route
              path={"/admin/add-office"}
              element={<AdminAddOfficePage />}
            />
            <Route path={"/admin/add-blog"} element={<AdminAddBlogPage />} />
            <Route
              path={"/admin/edit-blog/:id"}
              element={<AdminEditBlogPage />}
            />
            <Route
              path={"/admin/manegment-blog"}
              element={<AdminmanegmentBlogsPage />}
            />
          </Route>

          <Route path={"/login"} element={<LogInPage />} />
        </Routes>
        <Footer parentClass="" />
        </ScrollToTop>

    </BrowserRouter>
  );
};

export default App;
