import React, { useEffect } from "react";
import Axios from "axios";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

  return (
    <div className="homepage-container">
      <div className="create-container">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-container">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
