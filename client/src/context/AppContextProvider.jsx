import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://api.spacexdata.com/v3/capsules");
      const data = res.data;
      // console.log("data:", data);
      setData([...data]);
    } catch (err) {
      console.log("err:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const value = {
    data,
    setData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
