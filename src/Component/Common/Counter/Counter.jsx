/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ countTo, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);
    let currentFrame = 0;
    let animationFrameId;

    const counterAnimation = () => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const currentCount = Math.floor(progress * countTo);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(counterAnimation);
      } else {
        setCount(countTo); // Ensure the final count is correct
      }
    };

    animationFrameId = requestAnimationFrame(counterAnimation);

    return () => {
      // Cleanup animation frame if component unmounts
      cancelAnimationFrame(animationFrameId);
    };
  }, [countTo, duration]);

  return <div className="md:text-4xl">{count}</div>;
};

Counter.propTypes = {
  countTo: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Counter;
