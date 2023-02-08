import React from "react";

export default function CreateLottie({
  src,
  loop = "true",
  autoplay = "true",
  background = "transparent",
  speed = 1,
  class:calssname,
  style,
}: {
  src: string;
  [key: string]: string | boolean | number | Object;
}) {
  return React.createElement("lottie-player", {
    src,
    loop,
    background,
    autoplay,
    speed,
    style,
    class:calssname,
  });
}
