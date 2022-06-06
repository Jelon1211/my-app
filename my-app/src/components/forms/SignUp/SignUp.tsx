import useForm from "./useForm";
import ValidateForm from "./ValidateForm";
import "./signup.css";
import { TypesForm } from "../../../models/Forms";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { handleChange, handleSubmit, values, errors }: TypesForm =
    useForm(ValidateForm);

  return (
    <div className="signUpContainer">
      <form onSubmit={handleSubmit} className="formSignUp" noValidate>
        <span className="signUpHeading">Enter Your Details</span>
        <div className="form-inputs">
          <label htmlFor="firstName" className="form-label"></label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            className="form-input"
            placeholder="First Name *"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastName" className="form-label"></label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="form-input"
            placeholder="First Name *"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label"></label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Email *"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label"></label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password *"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="repeatedPassword" className="form-label"></label>
          <input
            id="repeatedPassword"
            type="password"
            name="repeatedPassword"
            className="form-input"
            placeholder="Repeat password *"
            value={values.repeatedPassword}
            onChange={handleChange}
          />
          {errors.repeatedPassword && <p>{errors.repeatedPassword}</p>}
        </div>
        <div>
          <button className="form-input-btn" type="submit">
            SIGN UP
          </button>
        </div>
        <div>
          <span className="form-input-login">
            Aleready have an account? Then <Link to="/signin"> sign in</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
