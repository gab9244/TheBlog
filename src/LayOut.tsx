import { Outlet } from "react-router-dom";
import Header from "./Header";

import React from "react";

const LayOut = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default LayOut;
