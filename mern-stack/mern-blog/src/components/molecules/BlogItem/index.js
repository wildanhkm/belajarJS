import React from "react";
import { Button, Gap } from "../../atoms";
import { useHistory } from "react-router-dom";
import "./blogItem.scss";

const BlogItem = (props) => {
  const { onDelete, image, title, date, name, body, _id } = props;
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumbnail" src={image} alt="blog thumbnail" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
          <div className="edit-wrapper">
            <p
              className="edit"
              onClick={() => history.push(`/create-blog/${_id}`)}
            >
              Edit
            </p>{" "}
            |
            <p className="delete" onClick={() => onDelete(_id)}>
              Delete
            </p>
          </div>
        </div>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push(`/detail-blog/${_id}`)}
        />
      </div>
    </div>
  );
};

export default BlogItem;
