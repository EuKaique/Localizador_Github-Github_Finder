/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Profile = ({ user }) => (
  <center>
  <div>
    <div className="col">
      <div className="col">
        <div id="profile-background" className="card" style={{ width: "18rem" }}>
          <img className="card-img-top mb-4" src={user.avatar_url} style={{borderRadius: "50%"}}/>
          <div className="card mb-2">
            <a href={user.repos_url} rel="noreferrer" target="_blank" className="btn btn-primary btn-block">
              Repos
            </a>
          </div>
          <div className="card mb-2">
            <a href={user.repos_url} rel="noreferrer" target="_blank" className="btn btn-warning btn-block">
              Starred
            </a>
          </div> 
          <div className="card mb-2">
            <a href={user.html_url} rel="noreferrer" target="_blank" className="btn btn-dark btn-block">
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </center>
);

export default Profile;
