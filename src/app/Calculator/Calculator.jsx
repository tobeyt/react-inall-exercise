import React, { useState } from "react";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [valueText, setValueText] = useState("");
  const value = [
    "+",
    "-",
    "x",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "Clear",
    "=",
  ];

  const calculate = (arr) => {
    if (arr[1] === "+") {
      return Number(arr[0]) + Number(arr[2]);
    } else if (arr[1] === "-") {
      return Number(arr[0]) - Number(arr[2]);
    } else if (arr[1] === "x") {
      return Number(arr[0]) * Number(arr[2]);
    }
  };

  const handleValueInput = (value) => {
    switch (value) {
      case "=":
        const res = valueText.split(" ");
        if (
          !isNaN(Number(res[0])) &&
          (res[1] === "x" || res[1] === "+" || res[1] === "-") &&
          !isNaN(Number(res[2]))
        ) {
          setValueText(String(calculate(res)));
        } else {
          setValueText("");
        }
        break;
      case "Clear":
        setValueText("");
        break;
      case "+":
      case "-":
      case "x":
        setValueText(valueText + " " + value + " ");
        break;
      default:
        setValueText(valueText + value);
    }
  };

  const buttonList = [];
  value.forEach((cur, index) => {
    buttonList.push(
      <button key={index} onClick={() => handleValueInput(cur)}>
        {cur}
      </button>
    );
  });
  return (
    <div>
      <div className="databar">
        <h1>在线计算器</h1>
        <input type="text" value={valueText} readOnly />
      </div>
      <div className="buttonlist">{buttonList}</div>
      <Link to="/">回到主页</Link>
    </div>
  );
};

export default Calculator;
