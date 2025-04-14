"use client";

import { FC, useEffect, useRef, useState } from "react";

type Props = {
  fullText: string;
};

const TypingAnimation: FC<Props> = ({ fullText }) => {
  const [index, setIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        if (prev < fullText.length) {
          return prev + 1;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsCompleted(true);
          return prev;
        }
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fullText]);

  return (
    <>
      <span>{fullText.slice(0, index)}</span>
      {!isCompleted && <span className="ml-1 animate-ping">|</span>}
    </>
  );
};

export default TypingAnimation;
