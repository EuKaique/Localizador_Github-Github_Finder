import React from "react";

/* A CONSTANTE REPOS ESTRUTURA E ESTILIZA OS ÚLTIMOS 4 REPOSITÓRIOS QUE SERÃO RETORNADOS */

const Repos = ({ repo }) => (
  <center>
    <section id="card-repos" className="card card-body mb-3">
      <a
        id="link-repos"
        href={repo.html_url}
        rel="noreferrer"
        target="_blank"
      >
      <h5 className="col md-4">Repositório: {repo.name}</h5>
      <div className="col md-4">
        <span className="badge ">Stars: {repo.stargazers_count}</span>
        <span className="badge ">Watchers: {repo.watchers_count}</span>
        <span className="badge ">Forks: {repo.forks_count}</span>
      </div>
    </a>
    </section>
  </center>  
);

export default Repos;
