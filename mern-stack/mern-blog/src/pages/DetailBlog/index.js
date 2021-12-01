import React, { useEffect, useState } from "react";
import { Gap, Link } from "../../components/atoms";
import { useHistory, withRouter } from "react-router-dom";
import "./detailBlog.scss";
import { Axios } from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [props]);
  const history = useHistory();
  if (data.author) {
    return (
      <div className="detail-container">
        <img
          className="img-cover"
          src={`http://localhost:4000/${data.image}`}
          alt="blog post"
        />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="blog-content">{data.body}</p>
        <Gap height={20} />
        <Link title="Kembali ke Home" onClick={() => history.push("/")} />
      </div>
    );
  }
  return <p>Loading data...</p>;
};

export default withRouter(DetailBlog);
