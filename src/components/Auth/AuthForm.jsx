import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AuthContainer, ExtraFormLinks, FormContainer } from "./AuthFormStyles";
import {
  DefaultButton,
  DefaultInput,
  ErrorMessage,
  SuccessMessage,
} from "../../styles/GlobalStyledComponents";
import { Link, useNavigate } from "react-router-dom";
import sideImg from "../../assets/cinema-background.jpg";
import { logIn } from "../../store/user/actions";

export const AuthForm = ({ onSubmit, fields, submitText, title }) => {
  const [submitRequest, setSubmitRequest] = useState({});
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle input changes and update general state of values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    try {
      setSubmitRequest({ isLoading: true });
      e.preventDefault();

      // Make a POST request to the provided endpoint with input values and set authToken
      const response = await axios.post(onSubmit.endpoint, values);
      dispatch(logIn(response.data.authToken));

      // Navigate to the user dashboard after a successful submission
      setSubmitRequest({
        submitted: true,
        isLoading: false,
      });
      setTimeout(() => {
        navigate("/user-dashboard");
      }, 1500);
    } catch (error) {
      setSubmitRequest({
        error: true,
        submitted: true,
        errorMessage: error.response.data.message,
      });

      setTimeout(() => {
        setSubmitRequest({
          error: false,
        });
      }, 2500);
    }
  };

  return (
    <AuthContainer>
      <FormContainer>
        <h1>{title == "Login" ? "Login" : "Register"}</h1>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              <label>{field.label}:</label>
              <DefaultInput
                type={field.type}
                name={field.name}
                value={values[field.name]}
                onChange={(e) => handleInputChange(e, field.name)}
                required
              />
            </div>
          ))}
          <DefaultButton type='submit'>{submitText}</DefaultButton>
          <ExtraFormLinks>
            {/* Auto switch links */}
            <p>
              {title === "Login"
                ? "Do not have an account?"
                : "Already have an account?"}
            </p>
            <Link to={title === "Login" ? "/register" : "/login"}>
              {title === "Login" ? "Register" : "Login"}
            </Link>
          </ExtraFormLinks>
        </form>
        {submitRequest.isLoading && <p>Loading...</p>}

        {submitRequest.error && (
          <ErrorMessage>Sorry, {submitRequest.errorMessage}</ErrorMessage>
        )}
        {!submitRequest.isLoading &&
        submitRequest.submitted &&
        !submitRequest.error ? (
          <SuccessMessage>
            Successfully {title === "Login" ? "Logged in" : "Registered"}.
          </SuccessMessage>
        ) : null}
      </FormContainer>
      <img src={sideImg} />
    </AuthContainer>
  );
};
