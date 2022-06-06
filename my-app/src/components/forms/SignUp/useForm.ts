import { SetStateAction, useState } from "react";
import { typesOfErrors, Values } from "../../../models/Forms";

const useForm = (validate: {
  (values: Values): typesOfErrors;
  (values: Values): typesOfErrors;
  (arg0: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatedPassword: string;
  }): SetStateAction<{}>;
}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors(validate(values));

    console.log(
      "Name: ",
      values.firstName,
      "Last Name: ",
      values.lastName,
      "Email: ",
      values.email,
      "Pass: ",
      values.password
    );
  };

  return { handleChange, handleSubmit, values, errors };
};
export default useForm;
