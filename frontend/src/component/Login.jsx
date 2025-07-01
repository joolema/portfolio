import React from "react";

const Login = () => {
  return (
    <section>
      <h1>login</h1>
      <form>
        <label>Email</label>
        <input type="email" name="email" placeholder="jondoe@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="password" />
      </form>
    </section>
  );
};

export default Login;
