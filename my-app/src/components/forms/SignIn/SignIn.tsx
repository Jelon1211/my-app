import useForm from "../SignUp/useForm";
import ValidateForm from "../SignUp/ValidateForm";
import "./signin.css";
import { TypesForm } from "../../../models/Forms";
import { Link } from "react-router-dom";

const Signin = () => {
  const { handleChange, handleSubmit, values, errors }: TypesForm =
    useForm(ValidateForm);

  return (
    <div className="signInContainer">
      <form onSubmit={handleSubmit} className="formSignIn" noValidate>
        <span className="signInHeading">Enter Your Details</span>
        <div className="signInForm-inputs">
          <label htmlFor="email" className="signInForm-label"></label>
          <input
            id="email"
            type="email"
            name="email"
            className="signInForm-input"
            placeholder="Email *"
            required
            autoFocus
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="signInForm-inputs">
          <label htmlFor="password" className="signInForm-label"></label>
          <input
            id="password"
            type="password"
            name="password"
            className="signInForm-input"
            placeholder="Password *"
            required
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <button className="signInForm-input-btn" type="submit">
            SIGN IN
          </button>
        </div>
        <div>
          <span className="form-input-login">
            Don't have an account?{" "}
            <Link to="/signup">Click here to create one</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signin;
