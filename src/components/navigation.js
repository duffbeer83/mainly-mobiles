import { Link } from "gatsby";
import * as React from "react";

const Navigation = () => {
  // todo: format with 'active' page

  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
};
export default Navigation;
