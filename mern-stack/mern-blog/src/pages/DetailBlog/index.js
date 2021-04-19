import React from "react";
import { RegisterBg } from "../../assets";
import { Gap, Link } from "../../components/atoms";
import { useHistory } from "react-router-dom";
import "./detailBlog.scss";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-container">
      <img className="img-cover" src={RegisterBg} alt="" />
      <p className="blog-title">Title</p>
      <p className="blog-autho">Author - Date post</p>
      <p className="blog-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente unde
        totam similique neque enim placeat molestiae aut dicta animi. Qui
        doloribus iusto unde veniam iure omnis iste ea, minima voluptatem
        exercitationem molestias magnam blanditiis tempora eum officiis. Id
        veniam in temporibus laboriosam obcaecati eaque, facilis, exercitationem
        aspernatur, provident soluta ea.
      </p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
