import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <section>
        <h2>Email:</h2>
        <p>
          <a href="mailto:info@mainlymobiles.com.au">
            info@mainlymobiles.com.au
          </a>
        </p>
      </section>

      <section>
        <h2>Phone:</h2>
        <p>
          <a href="tel:+61299668000">02 9966 8000</a>
          <br />
          <a href="tel:+61427332843">0427 332 843</a>
        </p>
      </section>

      <section>
        <h2>Address:</h2>
        <p>
          40 Willoughby Road &#40;upstairs&#41;
          <br />
          Crows Nest, NSW 2065
        </p>

        <div class="map">
          <iframe
            title="Shop Location"
            src="https://maps.google.com/maps?q=Mainly%20Mobiles%20Communications&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            frameborder="0"></iframe>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

/* iframe - style="border:0" */
