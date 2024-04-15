import React, { useEffect } from "react";
import { selectLogggedInUser, signOutAsync } from "../AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
export default function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLogggedInUser);
  useEffect(() => {
    dispatch(signOutAsync());
  });
  return <> {!user && <Navigate to="/login" replace={true}></Navigate>}</>;
}
