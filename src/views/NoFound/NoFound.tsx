import React from "react";
import "./NoFound.css";
import CreateLottie from "../../utils/CreateLottie";
export default function NoFound() {
  
  return (
    <>
      <div className="NoFoundContent">
        <CreateLottie
        src={"https://assets10.lottiefiles.com/packages/lf20_a3kesdek.json"}
        style={{width:"300px"}}
        />
        <h1>NoFound</h1>
      </div>
    </>
  );
}
