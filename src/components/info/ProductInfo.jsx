import React from "react";
import atoms from "./assets/atoms.png";
import herobg from "./assets/herobg.png";
import s1 from "./assets/1.png";
import s2 from "./assets/2.png";
import s3 from "./assets/3.png";
import s4 from "./assets/4.png";
import s5 from "./assets/5.png";
import s6 from "./assets/6.png";
import Description from "./description/Description";

const STRUCTURE = [
  { name: "Lorem", img: s1, text: "Lorem ipsum dolor sit amet consectetur." },
  { name: "Lorem", img: s2, text: "Lorem ipsum dolor sit amet consectetur." },
  { name: "Lorem", img: s3, text: "Lorem ipsum dolor sit amet consectetur." },
  { name: "Lorem", img: s4, text: "Lorem ipsum dolor sit amet consectetur." },
  { name: "Lorem", img: s5, text: "Lorem ipsum dolor sit amet consectetur." },
  { name: "Lorem", img: s6, text: "Lorem ipsum dolor sit amet consectetur." },
];

const ProductInfo = () => {
  return (
    <div className="flex items-center h-full flex-col relative content-wrapper overflow-y-hidden">
      <img src={atoms} alt="FormPayments" className="absolute" />
      {/* <h1 className="font-bold">Lorem ipsum dolor sit amet consectetur.</h1>
      <div className="flex h-full items-center space-x-10">
        <div>
          <img src={herobg} alt="herobg" />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          {STRUCTURE.map((elem) => (
            <Description name={elem.name} img={elem.img} text={elem.text} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductInfo;
