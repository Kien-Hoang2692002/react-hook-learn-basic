import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";

const DetailBlog = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const {
    data: dataBlogDetail,
    loading,
    // isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  console.log("a", dataBlogDetail);

  const handleBackData = () => {
    navigate("/blog");
  };
  return (
    <>
      <button onClick={handleBackData}> {`<<<< Back`}</button>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Title:{" "}
              {loading === true ? "loading data...." : dataBlogDetail.title}
            </div>
            <hr></hr>
            <div className="content">
              Blog:{" "}
              {loading === true ? "loading data...." : dataBlogDetail.body}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
