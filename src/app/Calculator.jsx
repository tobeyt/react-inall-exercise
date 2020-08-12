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
  var calculate = function (s) {
    s = s.replace(/ /g, "");
    let numStr = "",
      lastSymbol = "",
      numStack = [];
    for (let i = 0; i <= s.length; i++) {
      if (/[\+\-\x\/]/.test(s[i]) || i == s.length) {
        switch (lastSymbol) {
          case "x":
            numStack.push(numStack.pop() * parseInt(numStr));
            break;
          case "/":
            numStack.push(~~(numStack.pop() / parseInt(numStr)));
            break;
          case "-":
            numStack.push(-parseInt(numStr));
            break;
          default:
            numStack.push(parseInt(numStr));
        }
        lastSymbol = s[i];
        numStr = "";
        continue;
      }
      numStr += s[i];
    }
    return numStack.reduce((_, val) => _ + val, 0);
  };

  const handleValueInput = (value) => {
    switch (value) {
      case "=":
        setValueText(String(calculate(valueText)));
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
