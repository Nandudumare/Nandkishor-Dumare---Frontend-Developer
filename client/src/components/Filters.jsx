import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Styles from "./Filters.module.css";

const Filters = () => {
  const { setPage, setStatus, status, setDate, setType, date, type } =
    useContext(AppContext);
  console.log("date:", date);
  console.log("type:", type);
  console.log("status:", status);

  return (
    <div className={Styles.filters}>
      <h1>Capsules</h1>
      <h2>Filters</h2>
      <div className={Styles.filters_div}>
        <div>
          Status :
          <select
            name=""
            id=""
            className={Styles.status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Select...
            </option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="active">Active</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div>
          Type :
          <input
            className={Styles.input}
            type="search"
            name=""
            id=""
            placeholder="Search Type.."
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          Launch :
          <input
            onChange={(e) => setDate(e.target.value)}
            className={Styles.input_time}
            type="datetime-local"
          />
        </div>
        <div className={Styles.button_div}>
          <button
            onClick={() => {
              setStatus("");
              setType("");
              setDate("");
              setPage(1);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
