import React from "react";
import FormHeader from "../components/form/FormHeader";
import Login from "../components/form/Login";

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen justify-center items-center flex">
      <div className="w-[30%] flex-col flex">
        <FormHeader />
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
