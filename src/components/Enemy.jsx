import React from "react";

export default function Enemy(props) {
  console.log(props);
  return (
    <div
      className="enemy"
      style={{
        top: `${props.position.top}px`,
        left: `${props.position.left}px`,
        transform: props.orientation === "left" ? "scaleX(-1)" : null
      }}
    >
      <img src={props.currentImage} />
    </div>
  );
}
