import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.spacexdata.com/v3/capsules?offset=${
          (page - 1) * 10
        }&limit=10`
      );
      const data = res.data;
      // console.log("data:", data);
      setData([...data]);
    } catch (err) {
      console.log("err:", err);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const value = {
    data,
    setData,
    page,
    setPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

//page * itemsPerPage + 1
