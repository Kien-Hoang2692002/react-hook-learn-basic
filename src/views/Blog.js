import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const Blog = () => {
  const {
    data: dataBlogs,
    loading,
    // isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", false);

  let newData = [];

  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }
  return (
    <div className="blogs-container">
      {loading === false &&
        newData &&
        newData.length > 0 &&
        newData.map((item) => {
          return (
            <div className="single-blog" key={item.id}>
              <div className="title">Title: {item.title}</div>
              <div className="content">Content: {item.body}</div>
              <button>
                <Link to={`/blog/${item.id}`}>View detail</Link>
              </button>
            </div>
          );
        })}
      {loading === true && (
        <div style={{ textAlign: "center" }}>Loading data...</div>
      )}
    </div>
  );
};

export default Blog;
