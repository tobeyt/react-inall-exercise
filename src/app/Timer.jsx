import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [end, setEnd] = useState(0);
  const [inputtime, setInputtime] = useState(0);
  useEffect(() => {
    if (end === 2) {
      for (let i = 1; i < 1000; i++) {
        clearInterval(i);
      }
    }
  }, [end]);
  return (
    <div>
      在线倒计时器
      <br />
      <div>
        设置时间
        <input
          type="text"
          value={inputtime}
          onChange={(e) => setInputtime(e.target.value)}
        />
        <input
          type="button"
          value="Start"
          onClick={() => {
            setTime(inputtime);
            setEnd(1);
            let t = inputtime;
            setInterval(() => {
              t--;
              setTime(t);
              if (t === 0) {
                setEnd(2);
              }
            }, 1000);
          }}
        />
        <div>{end === 0 ? "start" : end === 1 ? `${time} Seconds` : "end"}</div>
      </div>
      <Link to="/">回到主页</Link>
    </div>
  );
};

export default Timer;
