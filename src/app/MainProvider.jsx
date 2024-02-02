"use client";
import Store from "../Redux/Store";
import React from "react";
import { Provider } from "react-redux";

const MainProvider = ({ children }) => {
  return (
      <Provider store={Store}>{children}</Provider>
  );
};

export default MainProvider;
