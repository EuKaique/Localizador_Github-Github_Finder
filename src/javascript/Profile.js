/* eslint-disable jsx-a11y/alt-text */
import React from "react";

/* A CONSTANTE PROFILE ESTRUTURA E ESTILIZA OS DADOS QUE SERÃO RETORNADOS AO PESQUISAR PELO USUÁRIO */ 

const Profile = ({ user }) => (
  <center>
      <main className="col">
        <div id="profile-background" className="card" style={{ width: "16rem" }}>
          <img className="card-img-top mb-4" src={user.avatar_url} style={{borderRadius: "50%"}}/>
          <h5><i>{user.name}</i></h5>
          <div className="card mb-2">
            <a href={`${user.html_url}/repositories`} rel="noreferrer" target="_blank" className="btn btn-primary btn-block">
              Repos
            </a>
          </div>
          <div className="card mb-2">
            <a href={`${user.html_url}/?direction=desc&sort=updated&tab=stars`} rel="noreferrer" target="_blank" className="btn btn-warning btn-block">
              Starred
            </a>
          </div> 
          <div className="card mb-2">
            <a href={user.html_url} rel="noreferrer" target="_blank" className="btn btn-dark btn-block">
              Profile
            </a>
          </div>
        </div>
      </main>
  </center>
);

export default Profile;
