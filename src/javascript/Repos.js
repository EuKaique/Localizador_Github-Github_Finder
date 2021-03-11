import React from "react";

/* A CONSTANTE REPOS ESTRUTURA E ESTILIZA OS ÚLTIMOS 4 REPOSITÓRIOS QUE SERÃO RETORNADOS */

const Repos = ({ repo }) => (
    <div id="card-repos" className="card card-body mb-3">
      <a
        id="link-repos"
        href={repo.html_url}
        rel="noreferrer"
        target="_blank"
      >
      <h5 className="col md-4">Repositório: {repo.name}</h5>
      <div className="col md-4">
        <span className="badge ">Estrelas: {repo.stargazers_count}</span>
        <span className="badge ">Assistidos: {repo.watchers_count}</span>
        <span className="badge ">Garfados: {repo.forks_count}</span>
      </div>
    </a>
    </div>
);

export default Repos;
