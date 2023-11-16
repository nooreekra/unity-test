import React, { useState } from "react";
import clsx from "clsx";
import styles from "./description.module.scss";
import { ReactComponent as ArrowDown } from "../assets/arrowDown.svg";

const Description = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <button
      className={clsx(styles.description, props.style)}
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="flex items-center space-x-2 px-3 py-2">
        <img src={props.img} alt={props.name} className="h-8 w-8" />
        <div className="flex flex-col items-start">
          <h5 className="font-bold text-xs">{props.name}</h5>
          <p className="text-left text-[10px]">{props.text}</p>
        </div>
        <ArrowDown className="shrink-0" />
      </div>
      <FullDescription fullText={props.fullText} show={isOpened} />
    </button>
  );
};

const FullDescription = (props) => {
  if (props.show) {
    return (
      <div className={clsx(styles.fullDescription)}>
        <p className="text-left text-[10px]">{props.fullText}</p>
      </div>
    );
  }
};

export default Description;
