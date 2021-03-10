import React from "react";

const Repos = ({ repo }) => (
  <div id="link-repos" className="card card-body">
    <div className="col md-6">
      <a
        id="link-repos"
        href={repo.html_url}
        rel="noreferrer"
        target="_blank"
      >
      <h5 className="col md-6">Repository: {repo.name}</h5>
      
      <div className="col md-6">
        <span className="badge ">Stars: {repo.stargazers_count}</span>
        <span className="badge ">Watch: {repo.watchers_count}</span>
        <span className="badge ">Forks: {repo.forks_count}</span>
      </div>
    </a>
    </div>
  </div>
);

export default Repos;
