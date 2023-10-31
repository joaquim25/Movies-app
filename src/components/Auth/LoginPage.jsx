import React from "react";
import { AuthForm } from "./AuthForm";

export const LoginPage = () => {
  const fields = [
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  const onSubmit = {
    endpoint: "https://x8ki-letl-twmt.n7.xano.io/api:Ughk0d_6/auth/login",
  };

  return (
    <>
      <AuthForm
        onSubmit={onSubmit}
        fields={fields}
        submitText='Login'
        title='Login'
      />
    </>
  );
};
