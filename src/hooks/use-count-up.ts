"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(targetValue: number) {
  const [count, setCount] = useState(0);
  const targetValueRef = useRef(targetValue);

  useEffect(() => {
    const targetValue = targetValueRef.current;

    if (targetValue <= 0) {
      return;
    }

    const intervalDelay = Math.max(10, Math.floor(600 / targetValue));
    const intervalId = window.setInterval(() => {
      setCount((currentCount) => {
        if (currentCount >= targetValue) {
          window.clearInterval(intervalId);
          return targetValue;
        }

        const nextCount = currentCount + 1;

        if (nextCount >= targetValue) {
          window.clearInterval(intervalId);
          return targetValue;
        }

        return nextCount;
      });
    }, intervalDelay);

    return () => window.clearInterval(intervalId);
  }, []);

  return count;
}
