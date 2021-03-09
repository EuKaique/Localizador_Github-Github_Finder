/* eslint-disable jsx-a11y/alt-text */
import React from "react";


const Profile = ({ user }) => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={user.avatar_url} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6>Repositórios:</h6> 
              <span id="repos" className="badge badge-info">{user.public_repos}</span>  
            </li>
            <li className="list-group-item">
              <h6>Repositórios estrelados:</h6> 
              <span id="repos-stars" className="badge badge-warning">{user.starring}</span>
            </li>
          </ul>
          <div className="card-body">
            <a href={user.html_url} rel="noreferrer" target="_blank" className="btn btn-outline-dark btn-block">
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
