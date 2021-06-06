import { Link } from "gatsby";
import * as React from "react";

const Navigation = () => {
  // todo: format with 'active' page

  return (
    <nav>
      <Link to="/" activeClassName="active">
        HOME
      </Link>
      <Link to="/contact" activeClassName="active">
        CONTACT
      </Link>
    </nav>
  );
};
export default Navigation;
