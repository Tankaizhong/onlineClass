import React, { useEffect, useRef } from "react";
import "./Maincontent.css";
import animationData from "../../../assets/animated/3641-start-button.json";
import lottie from "lottie-web"
export default function Maincontent() {
  const contain = useRef<HTMLDivElement | null>(null);
  

  return (
    <div className="first-show">
      你好
      {/* <span className="title">An animated element</span> */}
      <div className="animated" ref={contain}></div>
    </div>
  );
}
