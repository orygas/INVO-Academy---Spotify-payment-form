import React from "react";
import HeaderImage from "./HeaderImage/HeaderImage";
import SimpleForm from "./SimpleForm/SimpleForm";

import "./PaymentForm.scss";

const PaymentForm = () => {
  return (
    <div className="PaymentForm">
      <HeaderImage src="/album.png" alt="Header image" />
      <SimpleForm />
    </div>
  );
};

export default PaymentForm;
