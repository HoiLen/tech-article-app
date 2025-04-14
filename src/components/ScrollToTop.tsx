"use client";

import { useLocation } from "@lazarv/react-server/navigation";
import React from "react";
const { useEffect } = React;

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location?.pathname]);

  return null;
};

export default ScrollToTop;
