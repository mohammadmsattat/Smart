import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
      const { t, i18n } = useTranslation();
  
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/manegment-service" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.service")}
          </div>
        </Link>
        <Link to="/admin/manegment-project" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.project")}
          </div>
        </Link>
        <Link to="/admin/manegment-employee" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.Employee")}
          </div>
        </Link>
        <Link to="/admin/manegment-partner" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.partner")}
          </div>
        </Link>
        <Link to="/admin/manegment-office" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.office")}
          </div>
        </Link>
        <Link to="/admin/manegment-blog" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.blog")}
          </div>
        </Link>

        <Link
          to="/admin/manegment-information"
          style={{ textDecoration: "none" }}
        >
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          {t("Admin:sidBar.information")}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
