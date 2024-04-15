import React from "react";
import { useSelector } from "react-redux";
import { selectLogggedInUser } from "../AuthSlice";
import { Navigate } from "react-router-dom";
export default function Protected({ children }) {
  const user = useSelector(selectLogggedInUser);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
  return <div></div>;
}
