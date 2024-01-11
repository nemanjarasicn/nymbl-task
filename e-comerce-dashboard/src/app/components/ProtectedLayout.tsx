import React from "react";
import { validateToken } from "../core/auth";
import { useAppDispatch } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { setErrorSession } from "../core/core.reducer";

import Main from "../pages/Main";
import Dashboard from "./Dashboard";

export default function ProtectedLayout(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const token: string | null = JSON.parse(
    String(sessionStorage.getItem("token"))
  );

  React.useEffect(() => {
    if (!token || !validateToken(token)) {
      dispatch(setErrorSession("Session is expired"));
      sessionStorage.removeItem("token");
      navigate("/login");
    }
  }, [token, dispatch, location]);

  return (
    <>
      {token && validateToken(token) ? (
        <Dashboard>
          <Main />
        </Dashboard>
      ) : null}
    </>
  );
}
