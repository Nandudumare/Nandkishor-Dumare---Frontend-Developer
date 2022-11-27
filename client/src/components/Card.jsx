import React from "react";

import Styles from "./Card.module.css";

const Card = ({ el }) => {
  return (
    <div className={Styles.card}>
      <div>
        Serial :&nbsp;
        <span className={Styles.serial}>{el.capsule_serial} </span>
      </div>
      <div>
        ID &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
        <span className={Styles.serial}>{el.capsule_id} </span>
      </div>
      <div>
        Launch :&nbsp;
        <span className={Styles.serial}>
          {Date(el.original_launch).slice(0, 15)}
        </span>
      </div>
      <div>
        Status :&nbsp;<span className={Styles.serial}>{el.status}</span>
      </div>
      <div>
        Type &nbsp;&nbsp;:&nbsp;<span className={Styles.serial}>{el.type}</span>
      </div>
    </div>
  );
};

export default React.memo(Card);

