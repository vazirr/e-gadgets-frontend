import React from "react";
import Navbar from "../features/navbar/Navbar";

import ProductDetails from "../features/product-list/components/ProductDetails";
export default function ProductDetailsPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
    </div>
  );
}
