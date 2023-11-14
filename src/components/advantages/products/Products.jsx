import React from "react";
import guarant from "./assets/guarant.png";
import hero from "./assets/hero.png";
import levitra from "./assets/levitra.png";
import viagra from "./assets/viagra.png";
import hims from "./assets/hims.png";
import roman from "./assets/roman.png";

const Products = () => {
  return (
    <div className="flex space-x-2 items-baseline">
      <img src={guarant} alt="guarant" className="h-full" />
      <img src={hero} alt="hero" className="h-full" />
      <img src={levitra} alt="levitra" className="h-full" />
      <img src={viagra} alt="viagra" className="h-full" />
      <img src={hims} alt="hims" className="h-full" />
      <img src={roman} alt="roman" className="h-full" />
    </div>
  );
};

export default Products;
