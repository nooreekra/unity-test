import React from "react";

const Description = (props) => {
  return (
    <div className="flex items-center space-x-2">
        <img src={props.img} alt={props.name} className="h-8 w-8"/>
      <div>
        <h5 className="font-bold">{props.name}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Description;
