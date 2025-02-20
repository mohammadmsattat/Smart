import React from "react";
import { UseLogIn } from "../../Hooks/LogInHook";
import { Card, CardBody, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function LogInPage() {
  const { t } = useTranslation();

  const [SetEmail, SetPassword, HandleLogIn] = UseLogIn();

  return (
    <div>
      <div className="login-page d-flex justify-content-center  align-items-center ">
        <Col col="12">
          <Card className="login-card text-black my-5 mx-auto">
            <CardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h3 className="fw-bold mb-2 ">{t("Login:login")}</h3>

              <label className="mt-5" for="email">
                {t("Login:email")}
              </label>
              <input
                onChange={(e) => SetEmail(e.target.value)}
                label="Email address"
                id="email"
                size="lg "
              />

              <label className="mt-5">{t("Login:password")}</label>
              <input
                onChange={(e) => SetPassword(e.target.value)}
                label="Password"
                type="password"
                size="lg"
              />

              <button
                className="mt-5 mx-2 px-5"
                size="lg"
                onClick={HandleLogIn}
              >
                {t("Login:log-btn")}
              </button>
            </CardBody>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default LogInPage;
