import React from "react";
import { ReactComponent as Scissors } from "./assets/scissors.svg";
import { ReactComponent as Hero } from "./assets/hero.svg";

import formPayments from "./assets/formPayments.png";

const Payment = () => {
  return (
    <div className="bg-secondary content-wrapper flex flex-col">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex justify-center">
          <Scissors />
        </div>
        <h2 className="text-white text-center font-bold">
          Update: Limited Time Offer For Our Readers! Promotion Ends: <br />{" "}
          Wednesday, October 18, 2023
        </h2>
        <div className="flex">
          <div className="hero-shadow">
            <Hero />
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className="flex justify-center items-center rounded-xl bg-dark-blue w-96 h-28">
              <p className="text-center text-white">
                <span className="font-semibold">Update:</span> Only 14 Bottles
                Still Available. Current Availability:{" "}
                <div className="rectangle" />
                <span className="font-semibold">LOW.</span> Sell-Out Risk:{" "}
                <span className="font-semibold">HIGH</span>
              </p>
            </div>
            <button className="flex items-center justify-center bg-red text-white rounded-3xl w-96 h-36 shadow-button">
              <a
                href="#"
                className="flex rounded-3xl shadow-link h-full w-full text-[32px] justify-center items-center font-bold"
              >
                GET A RISK-FREE SAMPLE TODAY!
              </a>
            </button>
            <p className="text-[32px] text-white italic font-bold">
              FREE SHIPPING!
            </p>
            <img src={formPayments} alt="FormPayments" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
