import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
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
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
