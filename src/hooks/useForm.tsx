import { ChangeEvent, useState } from "react";
import { formValues } from "../components/Form/definitions";

export const useForm = (initialState: formValues) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
