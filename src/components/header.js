import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header>
      <Link class="logo" to="/">
        <StaticImage src="../images/mmc.png" alt="Mainly Mobiles logo" />
      </Link>
      <div class="socialmedia">
        <div class="resp-fb">
          <a
            href="https://www.facebook.com/MainlyMobiles/"
            target="_blank"
            rel="noreferrer">
            <StaticImage src="../images/resp-fb.png" alt="Facebook logo" />
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
