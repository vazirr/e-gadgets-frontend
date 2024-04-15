import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, productSlice } from "./counterSlice";
import { selectItems } from "../cart/CartSlice";

export default function Order() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  return (
    <div>
      <div></div>
    </div>
  );
}
