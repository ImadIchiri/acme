import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Customers",
};

const Customers = () => {
  return (
    <div className="bg-blue-400 text-white p-6 rounded-2xl text-xl">
      <h1>Customers</h1>
    </div>
  );
};

export default Customers;
