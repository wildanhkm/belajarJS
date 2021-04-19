import React from "react";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";
import "./blogItem.scss";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumbnail" src={RegisterBg} alt="blog thumbnail" />
      <div className="content-detail">
        <p className="title">Title</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          laboriosam pariatur esse explicabo consequatur omnis veniam aut
          repellat, possimus eius.
        </p>
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
