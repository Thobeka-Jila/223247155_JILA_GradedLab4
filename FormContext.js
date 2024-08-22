import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userDetails: {},
    addressDetails: {},
    paymentDetails: {},
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const updateFormData = (key, data) => {
    setFormData(prevData => ({ ...prevData, [key]: data }));
  };

  const completeForm = () => {
    // Check if all required form data is present
    const allFormData = [
      formData.userDetails,
      formData.addressDetails,
      formData.paymentDetails,
    ];
    const allCompleted = allFormData.every(data => Object.keys(data).length > 0);

    if (allCompleted) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, completeForm, isFormCompleted: isCompleted }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);










