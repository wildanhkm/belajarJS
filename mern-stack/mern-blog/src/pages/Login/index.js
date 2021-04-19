import React from "react";
import { LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="laptop of blog" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          required="required"
        />
        <Gap height={15} />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          required="required"
        />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={75} />
        <Link
          title="Daftar Akun Baru"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
