import React, { useState } from "react";

function ClickCounter(props) {
  let [카운터, set카운터] = useState(0);
  let [intervalID, setIntervalID] = useState(0);

  function 증가함수() {
    intervalID = setInterval(() => {
      set카운터((카운터) => {
        return 카운터 + 1;
      });
    }, 1000);

    setIntervalID(intervalID);
  }

  function 감소함수() {
    clearInterval(intervalID);
  }
  return (
    <>
      <div> {props.tittle ? props.tittle : "클릭"}카운터</div>
      <div>count : {카운터}</div>
      <div> 타이머의 iD {intervalID}</div>

      <button onClick={증가함수}>시작</button>
      <button onClick={감소함수}>종료</button>
    </>
  );
}

export default ClickCounter;
