import React, { useState } from 'react';
import './SimpleForm.scss'
import InputField from '../InputField/InputField';


const SimpleForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: { value: '' },
    cardNumber: { value: '' },
    expiryDate: { value: '' },
    CVV: { value: '' },
  });

  const handleFormChange = (name: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [name]: { value } }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="SimpleForm__container">
      <div className="SimpleForm__header">Add your
        informations</div>
      <form onSubmit={handleSubmit}>
        <div className="SimpleForm__form">
        <InputField
          name="fullName"
          label="Name on card"
          value={form.fullName.value}
          onChange={(e) => handleFormChange('fullName', e.target.value)}
        />
        <InputField
          name="cardNumber"
          label="Card number"
          value={form.cardNumber.value}
          onChange={(e) => handleFormChange('cardNumber', e.target.value)}
        />
        <div className="SimpleForm__form-flex">
          <InputField
            name="expiryDate"
            label="Expiry date (MM/YY)"
            value={form.expiryDate.value}
            onChange={(e) => handleFormChange('expiryDate', e.target.value)}
          />
          <InputField
            name="CVV"
            label="CVV"
            value={form.CVV.value}
            onChange={(e) => handleFormChange('CVV', e.target.value)}
          />
        </div>
        </div>
        <button type="submit" disabled>Next step</button>
      </form>
    </div>

  );
};

export default SimpleForm;