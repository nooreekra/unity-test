import React from "react";
import clsx from "clsx";
import { ReactComponent as Scissors } from "./assets/scissors.svg";
import hero from "./assets/hero.png";
import styles from "./payment.module.scss";

import formPayments from "./assets/formPayments.png";

const Payment = () => {
  return (
    <div className={clsx("w-full flex flex-col overflow-x-hidden", styles.payment)}>
      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex justify-center">
          <Scissors />
        </div>
        <h2 className="text-white text-center font-bold md:text-[26px] text-[22px]">
          Update: Limited Time Offer For Our Readers! Promotion Ends: <br />{" "}
          Wednesday, October 18, 2023
        </h2>
        <div className="flex my-12">
          <div className={clsx(styles.hero, "md:block hidden")}>
            <img src={hero} alt="hero" className="max-w-[350px]" />
          </div>
          <div className="flex flex-col justify-between items-center md:mt-10 space-y-6">
            <div className="flex justify-center items-center rounded-xl bg-dark-blue md:w-[432px] w-[244px] md:h-28 md:px-12 md:py-6 px-2 py-2">
              <p className="text-center text-white md:text-[18px] text-[12px]">
                <span className="md:text-[18px] font-semibold text-[12px]">Update:</span> Only 14 Bottles
                Still Available. Current Availability:
                <div
                  className={clsx(
                    styles.rectangle,
                    "w-16 h-2 inline-block mx-2"
                  )}
                />
                <span className="md:text-[18px] font-semibold text-[12px]">LOW.</span>
                <br />
                Sell-Out Risk:
                <span className="md:text-[18px] font-semibold text-[12px]"> HIGH</span>
              </p>
            </div>
            <div className={clsx(styles.hero, "md:hidden")}>
              <img src={hero} alt="hero" className="max-w-[350px]" />
            </div>
            <button
              className={clsx(
                "flex md:w-[432px] w-[300px] md:h-[132px] h-[92px] items-center justify-center bg-red text-white rounded-3xl",
                styles.shadowButton
              )}
            >
              <a
                href="#"
                className={clsx(
                  "flex rounded-3xl h-full w-full  items-center  text-left",
                  styles.shadowLink
                )}
              >
                <p className="md:text-[32px] text-[22px] font-bold pl-5 leading-8">
                  GET A RISK-FREE SAMPLE TODAY!
                </p>
                <div className={styles.arrow}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </button>
            <p className="md:text-[32px] text-[22px] text-white italic font-bold">
              FREE SHIPPING!
            </p>
            <img src={formPayments} alt="FormPayments" className="md:w-[520px] w-[314px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
