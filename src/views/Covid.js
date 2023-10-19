import React, { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //setTimeout(() => {
    try {
      async function fetchDataCovid() {
        let res = await axios.get("https://covid-api.com/api/regions");
        let data = res && res.data ? res.data.data : [];
        setDataCovid(data);
      }
      fetchDataCovid();
      setLoading(false);
      setIsError(false);
    } catch (e) {
      setIsError(true);
      setLoading(false);
      console.log("check error", e);
      console.log("check error name", e.name);
      console.log("check error message", e.message);
    }

    //}, 3000);
  }, []);

  return (
    <>
      <h4>Test Call Covid API</h4>
      <table>
        {console.log("check", dataCovid)}
        <thead>
          <tr>
            <th>STT</th>
            <th>ISO</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {isError === false &&
            loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
              return (
                <tr key={item.name}>
                  <td>{index + 1}</td>
                  <td>{item.iso}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}

          {isError === true && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Something wrong!!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
