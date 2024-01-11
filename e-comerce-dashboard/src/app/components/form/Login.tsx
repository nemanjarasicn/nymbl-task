import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectErrorSession } from "../../core/core.selectors";
import { authLogin } from "../../core/core.actions";
import { loginFields } from "../../datas/constants";
import FormAction from "./FormAction";
import Input from "./FormInput";
import { setErrorSession } from "../../core/core.reducer";

const fields = loginFields;
const fieldsState = {};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errorSession = useAppSelector(selectErrorSession);
  const [loginState, setLoginState] = useState(fieldsState);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    e.preventDefault();
    dispatch(setErrorSession(""));
    authenticateUser(data);
  };

  const authenticateUser = (data: FormData) => {
    dispatch(
      authLogin({
        credentials: {
          username: data.get("email")?.toString() ?? "",
          password: data.get("password")?.toString() ?? "",
        },
      })
    )
      .then((res: any) => {
        if (!res.payload.error) {
          // Successful authentication
          navigate("/");
          dispatch(setErrorSession(""));
        } else {
          // Authentication failed, set error message
          setErrorMessage(res.payload.error);
        }
      })
      .catch((error) => {
        console.error("Error during authentication:", error);
        // Set a generic error message
        setErrorMessage("An unexpected error occurred. Please try again.");
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {errorSession && (
        <div className="text-red-500 mt-2 justify-center flex">
          Session is expired
        </div>
      )}
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      {errorMessage && (
        <div className="text-red-500 mt-2 justify-center flex">
          Bad Credentials
        </div>
      )}

      <FormAction text="Login" />
    </form>
  );
};

export default Login;
