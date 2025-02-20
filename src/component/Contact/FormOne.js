import React from "react";
import { UseSendEmailForm } from "../../Hooks/Contact-Hooks/UseSendEmailForm";
import { useTranslation } from "react-i18next";

const FormOne = () => {
  const { t } = useTranslation();

  const { SetName, setPhone, handelSend, setEmail } =
  UseSendEmailForm();

  return (
    <div className="axil-contact-form">
      <div className="form-group">
        <label>{t('Home:contactFormOne.name')}</label>
        <input
          type="text"
          onChange={(event) => SetName(event.target.value)}
          className="form-control"
          name="contact-name"
          placeholder={t('Home:contactFormOne.placeHolderName')}
          required
        />
      </div>
      <div className="form-group">
        <label>{t('Home:contactFormOne.email')}</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          name="contact-email"
          placeholder={t('Home:contactFormOne.placeHolderEmail')}
          required
        />
      </div>
      <div className="form-group mb--40">
        <label>{t('Home:contactFormOne.phone')}</label>
        <input
          type="tel"
          onChange={(event) => setPhone(event.target.value)}
          className="form-control"
          name="contact-phone"
          placeholder={t('Home:contactFormOne.placeHolderhoneP')}
          required
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          onClick={handelSend}
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
          {t('Home:contactFormOne.buttoun')}
          </button>
      </div>
      <div className="form-group"></div>
    </div>
  );
};

export default FormOne;
