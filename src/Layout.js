import React from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";

import { createContext } from "react";
export const QuizContext = createContext([]);

const Layout = () => {
  const quizes = useLoaderData();
  return (
    <QuizContext.Provider value={quizes}>
      <Header></Header>
      <Outlet></Outlet>
    </QuizContext.Provider>
  );
};

export default Layout;
