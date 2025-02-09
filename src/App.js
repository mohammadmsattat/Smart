import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
// Css Import
import './assets/scss/app.scss';

//import pages
import HomePage from './pages/Home/HomePage'
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import BlogPage from './pages/Blog/BlogPage';
import ContactPage from './pages/Contact/ContactPage';
import ServicePage from './pages/Services/ServicesPage';
import ServiceDetails from './pages/Services/ServiceDetails';
import ComingSoon from './pages/commingSoon/ComingSoon';
import TeamPage from './pages/team/TeamPage';



import ProjectDetails from './pages/projects/ProjectDetails';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import DarkModeBtn from './component/darkModeBtn/DarkModeBtn';
import LogInPage from './pages/Login/LogInPage';
import AdminAddPartnerPage from './pages/Admin/AdminAddPartner';
import AdminAddEmplyeePage from './pages/Admin/AdminAddEmployee';
import AdminAddServicePage from './pages/Admin/AdminAddService';
import AdminAddProjectPage from './pages/Admin/AdminAddProject';
import AdminManegmentServicePage from './pages/Admin/ManegmentService';
import AdminAddOfficePage from './pages/Admin/AdminAddOffice';
import AdminManegmentProjectPage from './pages/Admin/ManegmentProjects';
import  AdminmanegmentEmployeePage from './pages/Admin/AdminmanegmentEmployee'
import AdminManegmentPartnersPage from './pages/Admin/AdminmanegmentPartners';
import AdminManegmentOfficePage from './pages/Admin/AdminmanegmentOffice';


const App = () => {

	// const location = useLocation(); // 

	// const hideHeaderPaths = ["/login", "/dashboard"];
  return (
    <BrowserRouter>
		<ScrollToTop>
		{/* {!hideHeaderPaths.includes(location.pathname) && <Header/>} */}
		<Header/>
		<DarkModeBtn/>
			<Routes>
			
				<Route path={ "/"} element={<HomePage />}/>
				<Route path={ "/portfolio"} element={<PortfolioPage />}/>
				<Route path={ "/aboutUs"} element={<AboutUsPage />}/>
				<Route path={ "/blog"} element={<BlogPage />}/>
				<Route path={ "/contact"} element={<ContactPage/>}/>
				<Route path={ "/service"} element={<ServicePage/>}/>

				<Route path={ "/service/:id"} element={<ServiceDetails />}/>
				<Route path={ "/project/:id"} element={<ProjectDetails />}/>
				<Route path={ "/comingSoon"} element={<ComingSoon />}/>
				<Route path={ "/team"} element={<TeamPage />}/>
				
				<Route path={ "/admin/manegment-service"} element={<AdminManegmentServicePage />}/>
				<Route path={ "/admin/manegment-project"} element={<AdminManegmentProjectPage />}/>
				<Route path={ "/admin/manegment-employee"} element={<AdminmanegmentEmployeePage />}/>
				<Route path={ "/admin/manegment-partner"} element={<AdminManegmentPartnersPage />}/>
				<Route path={ "/admin/manegment-office"} element={<AdminManegmentOfficePage />}/>
				<Route path={ "/admin/addproject"} element={<AdminAddProjectPage />}/>
				<Route path={ "/admin/addpartner"} element={<AdminAddPartnerPage />}/>
				<Route path={ "/admin/addemployee"} element={<AdminAddEmplyeePage />}/>
				<Route path={ "/admin/addservice"} element={<AdminAddServicePage />}/>
				<Route path={ "/admin/addoffice"} element={<AdminAddOfficePage />}/>




				
				
				<Route path={ "/login"} element={<LogInPage />}/>


				
			</Routes>
            <Footer parentClass="" />
		</ScrollToTop>
    </BrowserRouter>
  )
}

export default App;
