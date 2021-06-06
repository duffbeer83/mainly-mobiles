import * as React from "react";
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <main class="body-content">{children}</main>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
