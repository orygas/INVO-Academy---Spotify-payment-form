import React, { useMemo, useState } from "react";
import "./SimpleForm.scss";
import InputField from "../InputField/InputField";


const SimpleForm: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    fullName: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    cardNumber: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    expiryDate: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    CVV: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const validator = basicValidator[name];
    let isValid = true;
    let errorMessage = "";

    if (validator) {
      const validatorValue = validator(value);

      if (typeof validatorValue === "string") {
        isValid = !validatorValue;
        errorMessage = validatorValue;
      }
    }
    setForm({
      ...form,
      [name]: { ...form[name], value, isValid, errorMessage },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid) {
      console.log(form);
    }
  };

  const isFormValid = useMemo(
    () => Object.values(form).every(({ isValid }) => isValid),
    [form]
  );

  const basicValidator: IBasicValidator = {
    fullName: (value: string) => {
      const regex =
        /([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,} )([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,})/;
      return regex.test(value) ? true : "Full name is incorrect";
    },
    cardNumber: (value: string) => {
      const regex = /^\d{13,16}$/;
      return regex.test(value) ? true : "Card number is incorrect";
    },
    expiryDate: (value: string) => {
      const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4})$/;
      return regex.test(value) ? true : "Expiry date is incorrect";
    },
    CVV: (value: string) => {
      const regex = /^\d{3,4}$/;
      return regex.test(value) ? true : "CVV is incorrect";
    },
  };

  return (
    <div className="SimpleForm__container">
      <div className="SimpleForm__header">Add your informations</div>
      <form onSubmit={handleSubmit}>
        <div className="SimpleForm__form">
          <InputField
            name="fullName"
            label="Name on card"
            value={form.fullName.value}
            onChange={handleFormChange}
            minLength={3}
            maxLength={50}
          />
          {form["fullName"].errorMessage && (
            <p className="SimpleForm__error-message">
              {form["fullName"].errorMessage}
            </p>
          )}
          <InputField
            name="cardNumber"
            label="Card number"
            value={form.cardNumber.value}
            onChange={handleFormChange}
            minLength={13}
            maxLength={16}
          />
          {form["cardNumber"].errorMessage && (
            <p className="SimpleForm__error-message">
              {form["cardNumber"].errorMessage}
            </p>
          )}
          <div className="SimpleForm__form-flex">
            <div>
              <InputField
                name="expiryDate"
                label="Expiry date (MM/YYYY)"
                value={form.expiryDate.value}
                onChange={handleFormChange}
                minLength={4}
                maxLength={7}
              />
              {form["expiryDate"].errorMessage && (
                <p className="SimpleForm__error-message">
                  {form["expiryDate"].errorMessage}
                </p>
              )}
            </div>
            <div>
              <InputField
                name="CVV"
                label="CVV"
                value={form.CVV.value}
                onChange={handleFormChange}
                minLength={3}
                maxLength={3}
              />
              {form["CVV"].errorMessage && (
                <p className="SimpleForm__error-message">
                  {form["CVV"].errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
        <button type="submit" disabled={!isFormValid}>
          Next step
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;

export interface IBasicValidator {
  [key: string]: (value: string) => boolean | string;
}

export interface IForm {
  [key: string]: {
    value: string;
    isValid: boolean;
    errorMessage: string;
  };
}
