import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Styles from "./Container.module.css";

const Container = () => {
  const { data, page, setPage } = useContext(AppContext);

  return (
    <section>
      <div className={Styles.pagination_div}>
        <div className={Styles.pagination}>
          <IoIosArrowBack
            color={page === 1 ? "grey" : "black"}
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
          />
          <span className={Styles.page}>{page} </span>
          <IoIosArrowForward
            color={data.length < 10 ? "grey" : "black"}
            onClick={() => {
              if (data.length >= 10) {
                setPage((prev) => prev + 1);
              }
            }}
          />
        </div>
      </div>

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
