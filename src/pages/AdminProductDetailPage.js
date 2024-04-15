import React from "react";
import Navbar from "../features/navbar/Navbar";

import AdminProductDetails from "../features/admin/components/AdminProductDetails";
export default function AdminProductDetailPage() {
  return (
    <div>
      <Navbar>
        <AdminProductDetails></AdminProductDetails>
      </Navbar>
    </div>
  );
}
