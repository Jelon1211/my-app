import { typesOfErrors, Values } from "../../../models/Forms";

const ValidateForm = (values: Values) => {
  let errors = {} as typesOfErrors;

  const ValidateSignUp = () => {
    if (!values.firstName.trim()) {
      errors.firstName = "Please fulfill marked fields.";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Please fulfill marked fields.";
    }
    if (!values.email) {
      errors.email = "Please fulfill marked fields.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Enter a valid email";
    }
    if (!values.password) {
      errors.password = "Please fulfill marked fields.";
    } else if (values.password.length < 7) {
      errors.password = "Minimum length is 8";
    }
    if (!values.repeatedPassword) {
      errors.repeatedPassword = "Please fulfill marked fields.";
    } else if (values.repeatedPassword !== values.password) {
      errors.repeatedPassword = "Password do not mach";
    } else if (values.repeatedPassword.length < 7) {
      errors.repeatedPassword = "Minimum length is 8";
    }
  };

  ValidateSignUp();

  return errors;
};

export default ValidateForm;
