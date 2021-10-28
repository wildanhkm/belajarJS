import React from "react";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";
import "./blogItem.scss";

const BlogItem = (props) => {
  const { image, title, date, name, body } = props;
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumbnail" src={image} alt="blog thumbnail" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
