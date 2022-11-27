import React from "react";
import Styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section>
      <div className={Styles.banner}>
        <div>
          <div className={Styles.text}>
            <p>
              Hello! <p>I'm Universe</p>
            </p>
            <p>
              The Universe is everything we can
              <p> touch, feel, sense, measure or detect.</p>
            </p>
          </div>
        </div>
        <div>
          <img
            src="http://res.cloudinary.com/dvakewn1g/image/upload/v1669551327/gjkxoepgnapmxjisefkc.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
