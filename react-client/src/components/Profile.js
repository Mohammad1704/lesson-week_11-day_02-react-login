import React, { Component } from "react";

const profile = ({ user, onLogout }) => {
  return (
    <div className="pt-5 mt-5">
      <h1> Hi {user.firstName}</h1>
      <button className="btn btn-primary" onClick={onLogout}>
        logout
      </button>
    </div>
  );
};

export default profile;
