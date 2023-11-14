import React from "react";
import Products from "./products/Products";
import ProductsTable from "./productsTable/ProductsTable";

const Advantages = () => {
  return (
    <div className="flex items-center flex-col relative">
      <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
      <Products />
      <ProductsTable />
    </div>
  );
};

export default Advantages;
