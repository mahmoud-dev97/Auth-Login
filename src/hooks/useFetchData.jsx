import { useEffect, useState } from "react";
import baseUrl from "../api/baseUrl";

function useFetchData(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    baseUrl
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        // setData(err);
        console.log(err);
      });
  }, [url]);
  return { data };
}

export default useFetchData;
