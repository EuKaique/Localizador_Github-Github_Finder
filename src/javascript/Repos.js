import React from 'react';

const Repos = ({repo})=>(
    <div className="card card-body mb-2">
        <h5 className="col md-6">Repositório:</h5>
        <div className="col md-6">
            <a id="link-repos" href={repo.html_url} rel="noreferrer" target="_blank">{repo.name}</a>
        </div>
        <div className="col md-6">
            <span className="badge badge-warning">Stars: {repo.stargazers_count}</span>
            <span className="badge badge-info">Watch: {repo.watchers_count}</span>
            <span className="badge badge-dark">Forks: {repo.forks_count}</span>
        </div>
    </div>
);

export default Repos;