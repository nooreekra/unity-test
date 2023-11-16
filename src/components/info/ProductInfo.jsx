import React from "react";
import styles from "./productionInfo.module.scss";
import atoms from "./assets/atoms.png";
import herobg from "./assets/herobg.png";
import hero from "./assets/hero.png";
import s1 from "./assets/1.png";
import s2 from "./assets/2.png";
import s3 from "./assets/3.png";
import s4 from "./assets/4.png";
import s5 from "./assets/5.png";
import s6 from "./assets/6.png";
import Description from "./description/Description";
import clsx from "clsx";
import useWindowDimensions from '../../heplers/helpers'

const STRUCTURE = [
  {
    name: "Lorem",
    img: s1,
    text: "Lorem ipsum dolor sit amet consectetur",
    style: "",
    fullText:
      "Lorem ipsum dolor sit amet consectetur. Quis purus enim suspendisse sed eu commodo dictum eget urna.",
  },
  {
    name: "Lorem",
    img: s2,
    text: "Lorem ipsum dolor sit amet consectetur.",
    style: "ml-2.5",
    mobileStyle: "mr-2.5",
    fullText:
      "Lorem ipsum dolor sit amet consectetur. Quis purus enim suspendisse sed eu commodo dictum eget urna.",
  },
  {
    name: "Lorem",
    img: s3,
    text: "Lorem ipsum dolor sit amet consectetur.",
    style: "ml-8",
    mobileStyle: "mr-8",
    fullText:
      "Lorem ipsum dolor sit amet consectetur. Quis purus enim suspendisse sed eu commodo dictum eget urna.",
  },
  {
    name: "Lorem",
    img: s4,
    text: "Lorem ipsum dolor sit amet consectetur.",
    style: "ml-8",
    mobileStyle: "mr-8",
    fullText:
      "Lorem ipsum dolor sit amet consectetur. Quis purus enim suspendisse sed eu commodo dictum eget urna.",
  },
  {
    name: "Lorem",
    img: s5,
    text: "Lorem ipsum dolor sit amet consectetur.",
    style: "ml-2.5",
    mobileStyle: "mr-2.5",
    fullText:
      "Lorem ipsum dolor sit amet consectetur. Quis purus enim suspendisse sed eu commodo dictum eget urna.",
  },
  {
    name: "Lorem",
    img: s6,
    text: "Lorem ipsum dolor sit amet consectetur.",
    style: "",
    mobileStyle: "",
    fullText:
      "Lorem ipsum dolor sit amet consectetur. Quis purus enim suspendisse sed eu commodo dictum eget urna.",
  },
];

const ProductInfo = () => {
  if (useWindowDimensions().width < 760) {
    return <ProductionInfoModile />;
  } else {
    return (
      <div className="h-full relative content-wrapper overflow-hidden mx-auto">
        <img
          src={atoms}
          alt="FormPayments"
          className="absolute z-0 top-14 w-[700px]"
        />
        <h1 className="font-bold z-10">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <div className="flex h-full justify-center items-center space-x-10 z-10 mt-6">
          <div>
            <div className={styles.imageContainer}>
              <img src={herobg} alt="herobg" className={styles.herobg} />
              <img src={hero} alt="hero" className={styles.hero} />
              <div className={styles.imageShadow}></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-full space-y-6">
            {STRUCTURE.map((elem) => (
              <Description
                name={elem.name}
                img={elem.img}
                text={elem.text}
                fullText={elem.fullText}
                style={elem.style}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

const ProductionInfoModile = () => {
  return (
    <div className="h-full w-full relative content-wrapper overflow-hidden mx-auto">
      <img
        src={atoms}
        alt="FormPayments"
        className="absolute z-0 top-14 w-[700px]"
      />
      <h1 className="font-bold z-10">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <div className="flex h-full w-full justify-center items-center z-10 mt-6">
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          {STRUCTURE.map((elem) => (
            <Description
              name={elem.name}
              img={elem.img}
              text={elem.text}
              fullText={elem.fullText}
              style={elem.mobileStyle}
            />
          ))}
        </div>
        <div className="absolute right-[-140px]">
          <div className={styles.imageContainer}>
            <img src={herobg} alt="herobg" className={styles.herobg} />
            <img
              src={hero}
              alt="hero"
              className={clsx(styles.hero, "left-[40%]")}
            />
            <div className={styles.imageShadow}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
