import React from "react";
import useFetch from "../customize/fetch";

const Covid = () => {
  const {
    data: dataCovid,
    loading,
    isError,
  } = useFetch("https://covid-api.com/api/regions", true);

  return (
    <div style={{ background: "#282c34", color: "white" }}>
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
    </div>
  );
};

export default Covid;
