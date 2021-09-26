import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-c-100">{children}</main>
    </div>
  );
};
export default Layout;
