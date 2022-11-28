import React from "react";
import { useRef } from "react";
import { useState } from "react";

import Styles from "./Card.module.css";

const Card = ({ el }) => {
  const [model, setModel] = useState(false);

  const modelRef = useRef();

  window.onclick = function (event) {
    if (event.target === modelRef.current) {
      setModel(false);
    }
  };

  return model ? (
    <div ref={modelRef} className={Styles.modal}>
      <div className={Styles.modal_content}>
        <div className={Styles.modal_header}>
          <span className={Styles.close} onClick={() => setModel(false)}>
            &times;
          </span>
          <h2>{el.capsule_serial}</h2>
        </div>
        <div className={Styles.modal_body}>
          <p>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {el.capsule_id}</p>
          <p>Details : {el.details}</p>
          <p>Status &nbsp;: {el.status}</p>
          <p>Launch &nbsp;: {new Date(el.original_launch).toString()}</p>
          <p>Type &nbsp;&nbsp;&nbsp;: {el.type}</p>
          <p>
            Missions:
            <span>
              {el.missions &&
                el.missions.map((elm) => {
                  return (
                    <div
                      className={Styles.missions}
                      key={elm.name + Math.random()}
                    >
                      <p>Name : {elm.name}</p>
                      <p>Flight : {elm.flight}</p>
                    </div>
                  );
                })}
            </span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={Styles.card} onClick={() => setModel(true)}>
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
          {new Date(el.original_launch).toString().slice(0, 15)}
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
