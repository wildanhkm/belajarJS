import React, { useEffect, useState } from "react";
import { Button, Input, Upload, TextArea, Gap, Link } from "../../components";
import "./createBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setForm,
  setImagePreview,
  updateToAPI,
} from "../../config/redux/action";
import { Axios } from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();
  const history = useHistory();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImagePreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => {
          console.log("error:", err);
        });
    }
  }, [props]);

  const onSubmit = () => {
    const id = props.match.params.id;

    if (isUpdate) {
      updateToAPI(form, id);
    } else {
      postToAPI(form);
    }
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImagePreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">{isUpdate ? "Update" : "Create New "} Blog Post</p>
      <Input
        label="Post Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-container">
        <Button title={isUpdate ? "Update" : "Simpan"} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default withRouter(CreateBlog);
