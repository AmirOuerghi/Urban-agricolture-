import React from 'react';
import './chat.css';
import axios from "axios";

function AuthPage(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.username;
    axios.post("http://localhost:8001/authenticate",{ username : value })
    .then(res => props.onAuth({...res.data , secret:value }))
    .catch(err=>console.log(err));
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <label className="auth-label">Username</label>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthPage;
