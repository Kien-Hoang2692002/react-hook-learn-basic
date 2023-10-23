import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    //setTimeout(() => {
    try {
      async function fetchdata() {
        let res = await axios.get(url);
        if (isCovidData === true) {
          let data = res && res.data ? res.data.data : [];
          setData(data);
          setLoading(false);
          setIsError(false);
        } else {
          let data = res && res.data ? res.data : [];
          setData(data);
          setLoading(false);
          setIsError(false);
        }
      }

      setTimeout(() => {
        fetchdata();
      }, 1000);
    } catch (e) {
      setIsError(true);
      setLoading(false);
      // console.log("check error", e);
      // console.log("check error name", e.name);
      // console.log("check error message", e.message);
    }

    return () => {
      ourRequest.cancel("Request Operation cancel user");
    };

    //}, 3000);
  }, [url]);

  return {
    data,
    loading,
    isError,
  };
};

export default useFetch;
