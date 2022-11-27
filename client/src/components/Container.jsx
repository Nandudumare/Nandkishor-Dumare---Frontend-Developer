import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";

import Styles from "./Container.module.css";

const Container = () => {
  const { data } = useContext(AppContext);
  console.log("data:", data);

  return (
    <section>
      <div className={Styles.container}>
        {data &&
          data.map((el) => {
            return <Card el={el} key={el.capsule_id + Math.random()} />;
          })}
      </div>
    </section>
  );
};

export default Container;
