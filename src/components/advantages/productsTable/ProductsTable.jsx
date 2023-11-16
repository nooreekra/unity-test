import React, {useRef} from "react";
import { ReactComponent as Cross } from "./assets/cross.svg";
import { ReactComponent as CheckMark } from "./assets/checkmark.svg";
import { ReactComponent as FiveStars } from "./assets/5stars.svg";
import { ReactComponent as ThreeStars } from "./assets/3stars.svg";
import { ReactComponent as TwoStars } from "./assets/2stars.svg";
import guarant from "./assets/guarant.png";
import hero from "./assets/hero.png";
import levitra from "./assets/levitra.png";
import viagra from "./assets/viagra.png";
import hims from "./assets/hims.png";
import roman from "./assets/roman.png";
import './productsTable.css';

const ProductsTable = () => {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const trStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const tdFirstStyle = {
    padding: "8px",
  };

  const tdStyle = {
    border: "1px solid #6D6D6D",
    padding: "8px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "154px",
    height: "90px",
    color: "#777777",
    fontWeight: "700",
  };

  const greenBackground = {
    background: "linear-gradient(0deg, #536D4D, #536D4D)",
    boxShadow: "inset 0px 0px 12px -3px black",
    color: "white",
  };

  const firstColumn = {
    borderLeft: "none",
    color: "black",
    position: "sticky",
    background: "white",
    left: "0",
  };


  return (
    <div className="w-full">
        <table style={tableStyle} className="mb-10 w-[900px]">
            <tbody>
              <tr style={trStyle}>
                <td style={{ ...tdFirstStyle, ...firstColumn }}>
                  <img
                    src={guarant}
                    alt="guarant"
                    className="w-[148px] h-full"
                  />
                </td>
                <td style={tdFirstStyle}>
                  <img src={hero} alt="hero" className="w-[148px] h-full" />
                </td>
                <td style={tdFirstStyle}>
                  <img
                    src={levitra}
                    alt="levitra"
                    className="w-[148px] h-full"
                  />
                </td>
                <td style={tdFirstStyle}>
                  <img src={viagra} alt="viagra" className="w-[148px] h-full" />
                </td>
                <td style={tdFirstStyle}>
                  <img src={hims} alt="hims" className="w-[148px] h-full" />
                </td>
                <td style={tdFirstStyle}>
                  <img src={roman} alt="roman" className="w-[148px] h-full" />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>
                  <FiveStars />
                </td>
                <td style={tdStyle}>
                  <ThreeStars />
                </td>
                <td style={tdStyle}>
                  <ThreeStars />
                </td>
                <td style={tdStyle}>
                  <TwoStars />
                </td>
                <td style={tdStyle}>
                  <TwoStars />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>lorem</td>
                <td style={tdStyle}>lorem</td>
                <td style={tdStyle}>lorem</td>
                <td style={tdStyle} className="flex justify-center">
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <Cross />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>
                  <Cross />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
                <td style={tdStyle}>
                  <CheckMark />
                </td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>1,66$</td>
                <td style={tdStyle}>8$</td>
                <td style={tdStyle}>55$</td>
                <td style={tdStyle}>6$</td>
                <td style={tdStyle}>20$</td>
              </tr>
              <tr style={trStyle}>
                <td style={{ ...tdStyle, ...firstColumn }}>Lorem</td>
                <td style={{ ...tdStyle, ...greenBackground }}>4,9</td>
                <td style={tdStyle}>4,3</td>
                <td style={tdStyle}>3,5</td>
                <td style={tdStyle}>4,1</td>
                <td style={tdStyle}>3,7</td>
              </tr>
            </tbody>
          </table>
        </div>
  );
};

export default ProductsTable;
