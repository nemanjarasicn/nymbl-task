import React from "react";

const FormHeader = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-20 w-50"
          src={require("../../datas/imgs/logo.png")}
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Login to your account
      </h2>
    </div>
  );
};

export default FormHeader;
