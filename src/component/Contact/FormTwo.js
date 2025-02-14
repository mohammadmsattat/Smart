import React from "react";
import { UseSendEmailForm } from "../../Hooks/Contact-Hooks/UseSendEmailForm";
import { useTranslation } from "react-i18next";

const FormTwo = () => {
  //for translate
      const { t } = useTranslation();
  
  //send email
  const { SetName, setPhone, handelSend, setEmail, setDescription } = UseSendEmailForm();
  return (
    <form className="axil-contact-form">
      <div className="form-group">
        <label>{t('contact:contactFormTwo.name')}</label>
        <input
          type="text"
          onChange={(event) => SetName(event.target.value)}
          className="form-control"
          name="contact-name"
          required
        />
      </div>
      <div className="form-group">
        <label>{t('contact:contactFormTwo.email')}</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          name="contact-email"
          required
        />
      </div>
      <div className="form-group">
        <label>{t('contact:contactFormTwo.phone')}</label>
        <input
          type="tel"
          onChange={(event) => setPhone(event.target.value)}
          className="form-control"
          name="contact-phone"
          required
        />
      </div>
      <div className="form-group mb--40">
        <label>{t('contact:contactFormTwo.masseg')}</label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
          name="contact-message"
          rows="4"
        ></textarea>
      </div>
      <div className="form-group">
        <button
          type="submit"
          onClick={handelSend}
          className="axil-btn btn-fill-primary btn-fluid btn-primary"
          name="submit-btn"
        >
         {t('contact:contactFormTwo.buttoun')}
        </button>
      </div>
      <div className="form-group"></div>
    </form>
  );
};

export default FormTwo;
