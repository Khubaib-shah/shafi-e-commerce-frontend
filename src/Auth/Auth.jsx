import React from "react";
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div className="flex  justify-center flex-col items-center">
        <h1 className="text-2xl">Auth page</h1>
        <div>
          <Link to="/auth/signup">Sign Up</Link>{" "}
          <Link to="/auth/signin">Sign in</Link>{" "}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Auth;
