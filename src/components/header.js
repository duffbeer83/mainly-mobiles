import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <Link class="logo" to="/">
        <img src="images/mmc.png" alt="Mainly Mobiles" />
      </Link>
      <div class="socialmedia">
        <div class="resp-fb">
          <a
            href="https://www.facebook.com/MainlyMobiles/"
            target="_blank"
            rel="noreferrer">
            <img src="img/resp-fb.png" alt="FB" />
          </a>
        </div>
      </div>
      <h1>
        <span class="m">M</span>ainly <span class="m">M</span>obiles
      </h1>
    </header>
  );
};
export default Header;
