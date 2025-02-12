import React from "react";
import { UseSendEmailForm } from "../../Hooks/Contact-Hooks/UseSendEmailForm";

const FormOne = () => {
  const { SetName, setPhone, handelSend, setEmail, response, Loading } =
  UseSendEmailForm();

  return (
    <div className="axil-contact-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => SetName(event.target.value)}
          className="form-control"
          name="contact-name"
          placeholder="Enter Name..."
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          name="contact-email"
          placeholder="example@mail.com"
          required
        />
      </div>
      <div className="form-group mb--40">
        <label>Phone</label>
        <input
          type="tel"
          onChange={(event) => setPhone(event.target.value)}
          className="form-control"
          name="contact-phone"
          placeholder="+123456789"
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
          Get Free Quote
        </button>
      </div>
      <div className="form-group"></div>
    </div>
  );
};

export default FormOne;
