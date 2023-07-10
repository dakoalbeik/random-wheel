import React from "react";

import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";

const CustomWheelComponent = ({ categories, show }) => {
  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    show && (
      <WheelComponent
        segments={categories.segments}
        segColors={categories.colors}
        winningSegment="won 10"
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={200}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />
    )
  );
};

export default CustomWheelComponent;
